const { pool } = require('../config/db');

const User = {
  async findByUsername(username) {
    const [rows] = await pool.query('SELECT * FROM users WHERE username = ? LIMIT 1', [username]);
    return rows[0];
  },

  async findById(id) {
    const [rows] = await pool.query('SELECT id, username, email, role, created_at FROM users WHERE id = ?', [id]);
    return rows[0];
  },

  async create({ username, email, passwordHash, role = 'admin' }) {
    const [result] = await pool.query(
      'INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)',
      [username, email, passwordHash, role]
    );
    return result.insertId;
  }
};

module.exports = User;
