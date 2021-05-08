// Express Module
const express = require("express");
const db = require("./Config/db");
// App
const app = express();


db.sequelize.sync();
// Using JSON
app.use(express.json());


// User Routes
const userRoute = require("./Account/route");
app.use("/users/", userRoute.route);



const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });



