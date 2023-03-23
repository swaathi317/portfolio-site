
const express = require('express')
const path = require("path");
const app = express()

// #############################################################################
// This configures static hosting for files in /public that have the extensions
// listed in the array.

app.use(express.static(path.join(__dirname, 'build')));

// Send index.html for all other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`React app listening at http://localhost:${port}`)
})
