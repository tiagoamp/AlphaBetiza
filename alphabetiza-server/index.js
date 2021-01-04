const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const kidsRoute = require('./src/routes/kidsRoutes')

const router = express.Router();
const app = express();
const port = process.env.PORT || 3001;

// middleware
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Alphabetiza API",
        version: "0.0.1"
    });
});

app.use('/kids', kidsRoute);

app.listen(port, function(){
  console.log(`Server running at port ${port}...`);
});
