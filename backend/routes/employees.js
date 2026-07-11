const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const employeeController = require('../controllers/employeeController');
const { authenticateToken } = require('../middleware/auth');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, '..', 'uploads')),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({
  storage,
  limits: { fileSize: Number(process.env.MAX_FILE_SIZE) || 5 * 1024 * 1024 }
});

// All employee routes require a valid JWT
router.use(authenticateToken);

router.get('/stats', employeeController.stats);
router.get('/', employeeController.getAll);
router.get('/:id', employeeController.getById);
router.post('/', upload.single('photo'), employeeController.create);
router.put('/:id', upload.single('photo'), employeeController.update);
router.delete('/:id', employeeController.remove);

module.exports = router;
