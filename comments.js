// Create web server application
// 1. Create web server
// 2. Create router
// 3. Define routes
// 4. Start server

// 1. Create web server
const express = require('express');
const cors = require('cors');
const app = express();

// 2. Create router
const commentsRouter = require('./routes/comments');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');

// 3. Define routes
app.use(cors());
app.use(express.json());
app.use('/api/comments', commentsRouter);
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);

// 4. Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
