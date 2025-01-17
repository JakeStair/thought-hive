
import User from '../models/User';
import Thought from '../models/Thought';

const cleanTheDB = async (): Promise<void> => {
  try {
    console.log('Cleaning database...');
    await User.deleteMany({});
    await Thought.deleteMany({});
    console.log('Database cleaned successfully!');
  } catch (err) {
    console.error('Error cleaning database:', err);
    process.exit(1);
  }
};

export default cleanTheDB;