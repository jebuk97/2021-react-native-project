const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;

// app.use('/api', (req, res) => res.json({hello: 'this is Server!'}));

// app.use('/test', (req, res) => res.json({hello: 'this is Server! again!'}));

app.use('/chat', (req, res) => res.json({ID: req.query.id}));

app.listen(port, () => console.log('Server is running on port '+port));