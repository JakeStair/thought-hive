import { Request, Response } from 'express';
import Thought from '../models/Thought.js';
import User from '../models/User.js';

export const createAThought = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.create(req.body);
        await User.findByIdAndUpdate(req.body.userId, { $push: { thoughts: thought._id } });
        res.status(201).json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
};

export const getAllThoughts = async (_req: Request, res: Response) => {
    try {
        const thoughts = await Thought.find();
        res.status(200).json(thoughts);
    } catch (err) {
        res.status(500).json(err);
    }
};

export const deleteThought = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
        if (!thought) {
            res.status(404).json({ message: 'Thought not found' });
            return
        }
        res.status(200).json({ message: 'Thought deleted' });
    } catch (err) {
        res.status(500).json(err);
    }
};