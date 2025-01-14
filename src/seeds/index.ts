import mongoose from 'mongoose';
import cleanDB from './cleanDB';
import User from '../models/User';
import Thought from '../models/Thought';
import { userSeedData } from './userSeedData';
import { thoughtSeedData } from './thoughtSeedData';

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://127.0.0.1:27017/socialNetworkDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to the database.');

    // Clean the database
    await cleanDB();

    // Seed users
    const users = await User.insertMany(userSeedData);
    console.log(`${users.length} users seeded successfully!`);

    // Seed thoughts
    const thoughtsWithUser = thoughtSeedData.map((thought) => {
      const user = users.find((u) => u.username === thought.username);
      if (user) {
        user.thoughts.push(thought);
      }
      return thought;
    });
    const thoughts = await Thought.insertMany(thoughtsWithUser);
    console.log(`${thoughts.length} thoughts seeded successfully!`);

    console.log('Seeding completed!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding the database:', err);
    process.exit(1);
  }
};

seedDatabase();
