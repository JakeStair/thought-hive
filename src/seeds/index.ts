import db from '../config/connection';
import User from '../models/User';
import Thought from '../models/Thought';
import cleanTheDB from './cleanDB';
import { thoughtsSeedData } from './thoughtSeedData';
import { usersSeedData } from './userSeedData';

const seedDatabase = async () => {
    try {
        await db();
        await cleanTheDB();
        const thoughts = await Thought.insertMany(thoughtsSeedData);
        const users = usersSeedData.map((user) => {
            const userThoughts = thoughts
                .filter((thought) => thought.username === user.username)
                .map((thought) => thought._id);

            return {
                ...user,
                thoughts: userThoughts,
            };
        });
        await User.insertMany(users);

        console.log('Seeding complete!');
        process.exit(0);
    } catch (err) {
        console.error('Error seeding the database:', err);
        process.exit(1);
    }
};

seedDatabase();
