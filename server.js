const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.config();
const itineraryRouter = require('./controller/itineraries.js');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }).then(() => {
        console.log('Connected to MongoDB');
    }).catch((error) => {
        console.log('Connection failed', error.message);
    });

    
app.use(cors());
app.use(express.json());

app.use('/itineraries', itineraryRouter);

app.listen(3000, () => {
    console.log('App is listening on port 3000');
});