const express = require('express');
const morgan = require('morgan');

const { router } = require('./routes/post');

const app = express();
const port = 8080;

// middleware
app.use(morgan('dev'));
app.use(router);

app.listen(port, () => { console.log(`Node Js API is listening on port ${port}`)});
