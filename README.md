# 🐝 Thought Hive

Thought Hive is the buzz-worthy backend for a social media app built with TypeScript, Node.js, Express, and MongoDB. Users can swarm in to share their thoughts (or bee-sides), react to others' thoughts, and build a hive of friends. This application is designed to showcase how to bee efficient and manage a hive-mind backend for social networking platforms. Bee-lieve us, it's the bee's knees of backend development!

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Walkthrough Video](#walkthrough-video)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributors](#contributors)
- [License](#license)

## Features

- Users can create, read, update, and delete their profiles.
- Thoughts can be created, viewed, updated, and deleted.
- Users can react to thoughts.
- Users can add or remove friends.
- Data is managed efficiently with MongoDB and Mongoose.

## Installation

To set up and run Thought Hive locally:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd thought-hive
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your `.env` file in the root directory with the following variables:
   ```env
   MONGODB_URI=<your-mongodb-connection-string>
   PORT=3001
   ```

4. Build the TypeScript files:
   ```bash
   npm run build
   ```

5. Seed the database:
   ```bash
   npm run seed
   ```

6. Start the application:
   ```bash
   npm run start
   ```

## Usage

Use a tool like [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/) to test the API endpoints. Ensure the server is running at `http://localhost:3001`.

## Walkthrough Video

[![Watch the video](https://via.placeholder.com/800x400?text=Walkthrough+Thumbnail)](https://your-video-link.com)

### API Endpoints

#### Users

- **GET** `/api/users` - Get all users
- **GET** `/api/users/:id` - Get a user by ID
- **POST** `/api/users` - Create a new user
- **PUT** `/api/users/:id` - Update a user by ID
- **DELETE** `/api/users/:id` - Delete a user by ID
- **POST** `/api/users/:userId/friends/:friendId` - Add a friend
- **DELETE** `/api/users/:userId/friends/:friendId` - Remove a friend

#### Thoughts

- **GET** `/api/thoughts` - Get all thoughts
- **GET** `/api/thoughts/:id` - Get a thought by ID
- **POST** `/api/thoughts` - Create a new thought
- **PUT** `/api/thoughts/:id` - Update a thought by ID
- **DELETE** `/api/thoughts/:id` - Delete a thought by ID
- **POST** `/api/thoughts/:thoughtId/reactions` - Add a reaction to a thought
- **DELETE** `/api/thoughts/:thoughtId/reactions/:reactionId` - Remove a reaction from a thought

## Technologies Used

- TypeScript
- Node.js
- Express
- MongoDB
- Mongoose

## Contributors

- **Jake Watson** - [GitHub](https://github.com/YourUsername)
- **Martha Watson** - [GitHub](https://github.com/Elementary-my-dear-Watson)

## License

This project is licensed under the MIT License. See the LICENSE file for details.


