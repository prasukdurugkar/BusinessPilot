const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// database connection file is in 'utils'
// connectDatabase();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
