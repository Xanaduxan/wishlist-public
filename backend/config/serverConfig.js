const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const cors = require('cors');
const upload = require('express-fileupload');

const sessionConfig = require('./sessionConfig');

const {
  cookiesCleaner, resLocals, getUser,
} = require('../middleware/middleware');

const config = (app) => {
  app.use(cors({
    origin: ['http://localhost:4000', 'http://localhost:3000'],
    optionsSuccessStatus: 200,
    credentials: true,
  }));
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));
  app.use(session(sessionConfig));
  // подключить после создания базы
  app.use(resLocals);
  // app.use(getUser);
  app.use(cookieParser());
  // app.use(cookiesCleaner);
  app.use(upload());
};

module.exports = config;
