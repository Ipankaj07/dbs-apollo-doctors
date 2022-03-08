const app = require("./index");
require('dotenv').config()
const connect = require("./config/db");

app.listen(process.env.PORT || 2000, async () => {
    await connect();
    console.log("server running on port 2000");
});