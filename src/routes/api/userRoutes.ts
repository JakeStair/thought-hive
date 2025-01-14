import { Router } from 'express';
import * as userController from '../../controllers/userController.js';

const router = Router();

router.route('/')
.get(userController.getAllUsers)
.post(userController.createUser);

router.route(':userId')
.get(userController.getUserById)
.put(userController.updateUser)
.delete(userController.deleteUser);

export default router;