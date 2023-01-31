import express from 'express';
import UserController from '../controllers/UserController';
import UserService from '../services/UserService';

const router = express.Router();
const userController = new UserController();

router.get('/api/user', userController.getUsers);
router.get('/api/user/:userId', userController.getUserById);

export default router;