import express from 'express';
import { signup, login } from '../controllers/authController.js';

const router = express.Router();

/**
 * POST /api/auth/signup
 * Register a new user
 */
router.post('/signup', signup);

/**
 * POST /api/auth/login
 * Login user
 */
router.post('/login', login);

export default router;

