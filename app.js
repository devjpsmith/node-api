const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
dotenv.config();

// db
mongoose.connect(
    process.env.MONGO_URI, 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
.then(() => console.log('DB Connected'));

mongoose.connection.on('error', err => { 
    console.log(`DB connection error: ${err.message}`);
});

// bring in routes
const { router } = require('./routes/post');

// middleware
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(router);

const port = process.env.PORT;

app.listen(port, () => { console.log(`Node Js API is listening on port ${port}`)});
