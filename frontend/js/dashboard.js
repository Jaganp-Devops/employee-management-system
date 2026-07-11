document.addEventListener('DOMContentLoaded', async () => {
  requireAuth();
  showUsername();

  try {
    const { stats } = await API.getStats();
    document.getElementById('stat-total').textContent = stats.total;
    document.getElementById('stat-active').textContent = stats.active;
    document.getElementById('stat-departments').textContent = stats.byDepartment.length;

    const deptList = document.getElementById('dept-breakdown');
    deptList.innerHTML = '';
    stats.byDepartment.forEach((d) => {
      const li = document.createElement('li');
      li.textContent = `${d.department}: ${d.count}`;
      deptList.appendChild(li);
    });
  } catch (err) {
    console.error('Failed to load stats:', err);
  }

  document.getElementById('logout-btn')?.addEventListener('click', () => {
    clearToken();
    window.location.href = 'login.html';
  });
});

function requireAuth() {
  if (!getToken()) {
    window.location.href = 'login.html';
  }
}

function showUsername() {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const el = document.getElementById('current-user');
  if (el && user.username) el.textContent = user.username;
}
