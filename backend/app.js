require('@babel/register');
const express = require('express');
const cors = require('cors');
const config = require('./config/serverConfig');
const { sequelize } = require('./db/models');

// роутеры
const mainRoute = require('./routes/mainRoute');
const friendsRoute = require('./routes/FriendsRoute');
const authRoute = require('./routes/authRoute');
const antiWishRoute = require('./routes/antiWishRoute');

const app = express();

const PORT = process.env.PORT ?? 4000;

config(app);
app.use(cors({
  origin: ['http://localhost:4000', 'http://localhost:3000'],
  optionsSuccessStatus: 200,
  credentials: true,
}));

// подключение роутов
app.use('/', mainRoute);
app.use('/myfriends', friendsRoute);
app.use('/auth', authRoute);
app.use('/antiwishlist', antiWishRoute);

app.listen(PORT, async () => {
  console.log(`Server started at ${PORT} port`);
  await sequelize.authenticate();
});
