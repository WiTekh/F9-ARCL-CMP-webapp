const express = require('express');

const app = express();

app.use(express.static('public/'));
app.listen(8081), function () {
    console.log("Starting web app on port 8080 ...");
};