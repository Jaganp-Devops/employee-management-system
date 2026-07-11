const Employee = require('../models/Employee');

exports.getAll = async (req, res, next) => {
  try {
    const { search, department, page = 1, limit = 20 } = req.query;
    const result = await Employee.findAll({ search, department, page, limit });
    res.json({ success: true, ...result });
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ success: false, message: 'Employee not found' });
    res.json({ success: true, employee });
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const required = ['first_name', 'last_name', 'email', 'department', 'position', 'salary', 'hire_date'];
    for (const field of required) {
      if (!req.body[field]) {
        return res.status(400).json({ success: false, message: `${field} is required` });
      }
    }

    const photo_url = req.file ? `/uploads/${req.file.filename}` : null;
    const id = await Employee.create({ ...req.body, photo_url });
    const employee = await Employee.findById(id);

    res.status(201).json({ success: true, message: 'Employee created', employee });
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ success: false, message: 'Email already exists' });
    }
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const existing = await Employee.findById(req.params.id);
    if (!existing) return res.status(404).json({ success: false, message: 'Employee not found' });

    const photo_url = req.file ? `/uploads/${req.file.filename}` : null;
    const employee = await Employee.update(req.params.id, { ...req.body, photo_url });

    res.json({ success: true, message: 'Employee updated', employee });
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const deleted = await Employee.delete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: 'Employee not found' });
    res.json({ success: true, message: 'Employee deleted' });
  } catch (err) {
    next(err);
  }
};

exports.stats = async (req, res, next) => {
  try {
    const stats = await Employee.getStats();
    res.json({ success: true, stats });
  } catch (err) {
    next(err);
  }
};
