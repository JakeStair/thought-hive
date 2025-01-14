import { Router } from 'express';
import * as thoughtController from '../../controllers/thoughtController.js';

const router = Router();

router.route('/')
.get(thoughtController.getAllThoughts)
.post(thoughtController.createThought);

export default router;