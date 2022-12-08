const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const upload = require('express-fileupload');
const fileUpload = require('express-fileupload');

const sessionConfig = require('./sessionConfig');

const {
  cookiesCleaner, resLocals, getUser,
} = require('../middleware/middleware');

const config = (app) => {
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));
  app.use(upload());
  app.use(session(sessionConfig));
  // подключить после создания базы
  app.use(resLocals);
  app.use(fileUpload());
  // app.use(getUser);
  app.use(cookieParser());
  // app.use(cookiesCleaner);
};

module.exports = config;
