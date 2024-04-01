const express = require('express');
const app = express();

// route handler for the root path
app.use(express.static(__dirname+"/public"))
app.use(express.json()); app.use(express.urlencoded({
  extended:false  
}

))


// Start the server on port 3000
const port = process.env.PORT || 3000;
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

