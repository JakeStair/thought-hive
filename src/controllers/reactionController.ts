// import { Request, Response } from 'express';
// import Thought from '../models/Thought.js';

// export const addReaction = async (req: Request, res: Response) => {
//     try {
//         const thought = await Thought.findByIdAndUpdate(
//             req.params.thoughtId,
//             { $push: { reactions: req.body } }, // req.body should contain the reaction
//             { new: true }
//         );

//         if (!thought) {
//             res.status(404).json({ message: 'Thought not found' });
//             return;
//         }

//         res.status(200).json(thought);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// };
