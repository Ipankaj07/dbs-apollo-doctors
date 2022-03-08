const mongoose = require("mongoose");

require('dotenv').config();

const ID = process.env.MONGO_ID;
const PASS = process.env.MONGO_PASS;

module.exports = () => {
    return mongoose.connect(
        `mongodb://${ID}:${PASS}@cluster0-shard-00-00.uvqk5.mongodb.net:27017,cluster0-shard-00-01.uvqk5.mongodb.net:27017,cluster0-shard-00-02.uvqk5.mongodb.net:27017/clinic?replicaSet=atlas-fll5vz-shard-0&ssl=true&authSource=admin`
    );
};