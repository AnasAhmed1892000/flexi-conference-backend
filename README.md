<h1 align="center">flexi-conference</h1>
<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js badge">
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express badge">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB badge">
</p>

## :rocket: Getting Started

To run this project locally, you need to have Node.js and MongoDB installed on your machine.

### Prerequisites

- Node.js
- MongoDB
- NPM or Yarn

### Installation

1. Clone this repo to your local machine using `git clone https://github.com/<your-username>/flexi-conference-backend.git`.
2. Go to the project directory using `cd flexi-conference-backend`.
3. Install the dependencies using `npm install` or `yarn install`.
4. The `.env` file in the root folder contains the environment variables and you can modify them:

`
NODE_ENV=development
PORT=3000
DATABASE=<your-mongodb-connection-string>
DATABASE_PASSWORD=<your-mongodb-password>
JWT_SECRET=<your-jwt-secret>`

Run the app using npm start or yarn start.<br> Open your browser and go to http://localhost:3000.<br> 

## :sparkles: Features

- **User Authentication**: Ensure secure access to protected routes and data by implementing user authentication using JSON Web Tokens (JWT). Users can securely register, log in, and access their account details.<br>

- **Validation and Error Handling**: Implement robust validation and error handling mechanisms to ensure data integrity and provide meaningful error messages to clients. Validate user input and handle common errors gracefully.<br>

- **Database Integration**: Seamlessly integrate with MongoDB, a powerful NoSQL database, to provide a flexible and scalable solution for data storage.<br>

## :hammer_and_wrench: Technologies

Node.js<br> Express<br> MongoDB<br> Mongoose<br> Helmet<br> Morgan<br> Bcrypt<br> Crypto<br> Validator<br> JWT<br> express-mongo-sanitize<br> xss-clean<br>

## API documentation
The API documentation can be found on: https://documenter.getpostman.com/view/25502580/2s9YJbzMgh
