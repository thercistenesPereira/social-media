const express = require('express');
const { userRouter, authRouter } = require('./routes');

const app = express();

app.use(express.json());

app.use('/user', userRouter);

app.use('/', authRouter);

module.exports = app;
