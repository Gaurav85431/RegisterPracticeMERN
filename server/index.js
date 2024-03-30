const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./controller/register');
const cors = require('cors');
const routes = require('./Routes/userRoutes');



app.use(express.json());

app.use(cors());

// db connectivity

mongoose.connect('mongodb://127.0.0.1:27017/Practice');

app.use('/api', router);

app.use('/api/new', routes);

app.listen(8000, () => {
  console.log(`Server Start`);
})