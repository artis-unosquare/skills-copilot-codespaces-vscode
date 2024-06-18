// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Import comments data
const comments = require('./comments.json');

// Use body-parser
app.use(bodyParser.json);