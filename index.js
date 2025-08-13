const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
let bodyParser = require('body-parser');
app.use(bodyParser.json());
let indexRouter = require('./routes/index.routes');
app.use('/', indexRouter);
app.listen(3000, () => {
    console.log("Server running on port 3000");
});