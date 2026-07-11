const { pool } = require('../config/db');

const Employee = {
  async findAll({ search = '', department = '', page = 1, limit = 20 } = {}) {
    const offset = (page - 1) * limit;
    let query = 'SELECT * FROM employees WHERE 1=1';
    const params = [];

    if (search) {
      query += ' AND (first_name LIKE ? OR last_name LIKE ? OR email LIKE ?)';
      params.push(`%${search}%`, `%${search}%`, `%${search}%`);
    }
    if (department) {
      query += ' AND department = ?';
      params.push(department);
    }

    query += ' ORDER BY created_at DESC LIMIT ? OFFSET ?';
    params.push(Number(limit), Number(offset));

    const [rows] = await pool.query(query, params);

    const [countResult] = await pool.query(
      'SELECT COUNT(*) as total FROM employees WHERE 1=1' +
        (search ? ' AND (first_name LIKE ? OR last_name LIKE ? OR email LIKE ?)' : '') +
        (department ? ' AND department = ?' : ''),
      search && department
        ? [`%${search}%`, `%${search}%`, `%${search}%`, department]
        : search
        ? [`%${search}%`, `%${search}%`, `%${search}%`]
        : department
        ? [department]
        : []
    );

    return { employees: rows, total: countResult[0].total };
  },

  async findById(id) {
    const [rows] = await pool.query('SELECT * FROM employees WHERE id = ?', [id]);
    return rows[0];
  },

  async create(data) {
    const {
      first_name, last_name, email, phone, department,
      position, salary, hire_date, status = 'active', photo_url = null
    } = data;

    const [result] = await pool.query(
      `INSERT INTO employees
       (first_name, last_name, email, phone, department, position, salary, hire_date, status, photo_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [first_name, last_name, email, phone, department, position, salary, hire_date, status, photo_url]
    );
    return result.insertId;
  },

  async update(id, data) {
    const {
      first_name, last_name, email, phone, department,
      position, salary, hire_date, status, photo_url
    } = data;

    await pool.query(
      `UPDATE employees SET
        first_name = ?, last_name = ?, email = ?, phone = ?, department = ?,
        position = ?, salary = ?, hire_date = ?, status = ?, photo_url = COALESCE(?, photo_url),
        updated_at = NOW()
       WHERE id = ?`,
      [first_name, last_name, email, phone, department, position, salary, hire_date, status, photo_url, id]
    );
    return this.findById(id);
  },

  async delete(id) {
    const [result] = await pool.query('DELETE FROM employees WHERE id = ?', [id]);
    return result.affectedRows > 0;
  },

  async getStats() {
    const [[{ total }]] = await pool.query('SELECT COUNT(*) as total FROM employees');
    const [[{ active }]] = await pool.query("SELECT COUNT(*) as active FROM employees WHERE status = 'active'");
    const [byDept] = await pool.query(
      'SELECT department, COUNT(*) as count FROM employees GROUP BY department'
    );
    return { total, active, byDepartment: byDept };
  }
};

module.exports = Employee;
