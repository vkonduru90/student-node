const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(bodyParser.json());
app.use(cors());

require('./routes')(app);
require('./connections/mongo');

app.listen(process.env.PORT, () => {
  console.log(`App Started on ${process.env.PORT}`);
});
