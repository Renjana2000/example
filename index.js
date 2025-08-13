const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
let bodyParser = require('body-parser');
app.use(bodyParser.json());
let indexRouter = require('./routes/index.routes');
app.use('/', indexRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});