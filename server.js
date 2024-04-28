const express = require("express");
const app = express();
const port = process.env.PORT || 3003;
const topicRoutes = require('./routers/router');

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', topicRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const dbConnection = require('./dbConnection');
dbConnection.connectToDatabase();