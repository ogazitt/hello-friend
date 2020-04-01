const express = require('express');
const path = require('path');

// create a new express app
const app = express();

// configure a static file server
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(__dirname));

/*
// main endpoint serves react bundle from /build
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
*/

// Launch the API Server at PORT, or default port 8080
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('listening on port', port);
});
