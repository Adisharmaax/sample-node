const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
app.use(express.json());
app.use('/api/users', userRoute);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});