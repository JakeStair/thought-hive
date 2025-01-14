import mongoose from 'mongoose';
import User from '../models/User';
import Thought from '../models/Thought';

const cleanDB = async () => {
  try {
    console.log('Cleaning database...');
    await User.deleteMany({});
    await Thought.deleteMany({});
    console.log('Database cleaned successfully!');
  } catch (err) {
    console.error('Error cleaning database:', err);
  }
};

export default cleanDB;
