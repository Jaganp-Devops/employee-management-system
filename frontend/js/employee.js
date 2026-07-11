document.addEventListener('DOMContentLoaded', () => {
  if (!getToken()) {
    window.location.href = 'login.html';
    return;
  }

  document.getElementById('logout-btn')?.addEventListener('click', () => {
    clearToken();
    window.location.href = 'login.html';
  });

  const page = document.body.dataset.page;
  if (page === 'employees-list') initEmployeeList();
  if (page === 'employee-add') initEmployeeForm();
  if (page === 'employee-edit') initEmployeeForm(true);
});

// ---------- Employee List Page ----------
async function initEmployeeList() {
  const tableBody = document.getElementById('employee-table-body');
  const searchInput = document.getElementById('search-input');
  const deptFilter = document.getElementById('department-filter');

  async function loadEmployees() {
    tableBody.innerHTML = '<tr><td colspan="7">Loading...</td></tr>';
    try {
      const params = {};
      if (searchInput.value.trim()) params.search = searchInput.value.trim();
      if (deptFilter.value) params.department = deptFilter.value;

      const { employees } = await API.getEmployees(params);
      renderEmployees(employees);
    } catch (err) {
      tableBody.innerHTML = `<tr><td colspan="7">Error: ${err.message}</td></tr>`;
    }
  }

  function renderEmployees(employees) {
    if (!employees.length) {
      tableBody.innerHTML = '<tr><td colspan="7">No employees found.</td></tr>';
      return;
    }
    tableBody.innerHTML = employees.map((emp) => `
      <tr>
        <td data-label="ID">${emp.id}</td>
        <td data-label="Name">${escapeHtml(emp.first_name)} ${escapeHtml(emp.last_name)}</td>
        <td data-label="Email">${escapeHtml(emp.email)}</td>
        <td data-label="Department">${escapeHtml(emp.department)}</td>
        <td data-label="Position">${escapeHtml(emp.position)}</td>
        <td data-label="Status"><span class="status status-${emp.status}">${emp.status}</span></td>
        <td data-label="Actions">
          <a href="edit-employee.html?id=${emp.id}" class="btn-small btn">Edit</a>
          <button class="btn-small btn-danger" data-id="${emp.id}">Delete</button>
        </td>
      </tr>
    `).join('');

    tableBody.querySelectorAll('.btn-danger').forEach((btn) => {
      btn.addEventListener('click', async () => {
        if (!confirm('Delete this employee?')) return;
        try {
          await API.deleteEmployee(btn.dataset.id);
          loadEmployees();
        } catch (err) {
          alert('Delete failed: ' + err.message);
        }
      });
    });
  }

  searchInput.addEventListener('input', debounce(loadEmployees, 400));
  deptFilter.addEventListener('change', loadEmployees);

  loadEmployees();
}

// ---------- Add / Edit Employee Page ----------
async function initEmployeeForm(isEdit = false) {
  const form = document.getElementById('employee-form');
  const errorBox = document.getElementById('form-error');
  const params = new URLSearchParams(window.location.search);
  const employeeId = params.get('id');

  if (isEdit && employeeId) {
    try {
      const { employee } = await API.getEmployee(employeeId);
      Object.entries(employee).forEach(([key, value]) => {
        const input = form.elements[key];
        if (input && value !== null) {
          if (input.type === 'date') {
            input.value = String(value).split('T')[0];
          } else {
            input.value = value;
          }
        }
      });
    } catch (err) {
      errorBox.textContent = 'Failed to load employee: ' + err.message;
    }
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorBox.textContent = '';
    const formData = new FormData(form);

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Saving...';

    try {
      if (isEdit && employeeId) {
        await API.updateEmployee(employeeId, formData);
      } else {
        await API.createEmployee(formData);
      }
      window.location.href = 'employees.html';
    } catch (err) {
      errorBox.textContent = err.message || 'Save failed. Please try again.';
    } finally {
      btn.disabled = false;
      btn.textContent = 'Save';
    }
  });
}

// ---------- Utils ----------
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
