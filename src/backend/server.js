const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Category = require('./models/category');

const API_PORT = 3000;
const app = express();
app.use(cors());
const router = express.Router();

// this is our MongoDB database
const dbRoute= require('./config');

// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Get one of our category
router.get('/category/:id', function(req, res) {
    return Category.findById(req.params.id, function (err, category) {
        if(!category) {
            res.statusCode = 404;
            return res.send({ success: false, error: 'Not found' });
        }
        if (!err) {
            return res.send({ status: 'OK', category:category });
        } else {
            res.statusCode = 500;
            // log.error('Internal error(%d): %s',res.statusCode,err.message);
            return res.send({ error: 'Server error' });
        }
    });
});





// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));