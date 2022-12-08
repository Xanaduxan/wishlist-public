require('@babel/register');
const express = require('express');
const cors = require('cors');
const config = require('./config/serverConfig');
const { sequelize } = require('./db/models');

// роутеры
const mainRoute = require('./routes/mainRoute');
const friendsRoute = require('./routes/FriendsRoute');
const authRoute = require('./routes/authRoute');
const groupRoute = require('./routes/groupsRoute');
const tenWishRoute=require('./routes/tenWishRoute')
const antiWishRoute = require('./routes/antiWishRoute');

const wishRoute = require('./routes/wishlistRoute');
const profileRoute = require('./routes/userProfile');

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
app.use('/mygroups', groupRoute);
app.use('/profile', profileRoute);

app.use('/antiwishlist', antiWishRoute);

app.use('/mywishes', wishRoute);
app.use('/tenwish', wishRoute);

app.listen(PORT, async () => {
  console.log(`Server started at ${PORT} port`);
  await sequelize.authenticate();
});
