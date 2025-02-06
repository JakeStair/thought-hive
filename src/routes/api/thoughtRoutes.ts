import { Router } from 'express';
import * as thoughtController from '../../controllers/thoughtController.js';

const router = Router();

router.route('/')
.get(thoughtController.getAllThoughts)
.post(thoughtController.createAThought)
.delete(thoughtController.deleteThought);

router.route('/:thoughtId')
.get(thoughtController.getThoughtById)
.put(thoughtController.updateThought)
.delete(thoughtController.deleteThought);

router.route('/:thoughtId/reactions')
.post(thoughtController.addReaction);

router.route('/:thoughtId/reactions/:reactionId')
.delete(thoughtController.deleteReaction);

export default router;