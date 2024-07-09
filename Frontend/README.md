# Chatting App

This is a simple chatting application with backend functionality. Users can create accounts, log in, and chat with each other in real-time.

## Features
- User authentication using JSON Web Tokens (JWT)
- Real-time messaging using Socket.io
- Secure password hashing using bcryptjs
- MongoDB database using Mongoose
- Server built with Node.js and Express

## Installation
1. Clone the repository.
2. Install backend dependencies by running `npm install`.
3. Install frontend dependencies by navigating to the `Frontend` directory and running `npm install`.

## Usage
1. Start the server: 
    ```
    npm run server 
    ```
   This will start the server using nodemon for automatic restart on file changes.

2. Alternatively, you can start the server without nodemon:
    ```
    npm start 
    ```

3. To build the frontend:
   ```
   npm run build --prefix Frontend 
   ```

4. Access the application at `http://localhost:your_port_number` in your web browser.

