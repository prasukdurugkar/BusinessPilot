const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/your_database_name', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// Define routes and middleware here

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
