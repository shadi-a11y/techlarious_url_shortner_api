const mongoose = require("mongoose");
const dotenv = require("dotenv");

// The following line of code loads the environment variables present in the .env file (configures them)
dotenv.config();

exports.connectDB = async() => {

    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("connected to the database")
    }catch(err){
        console.log(err);
        process.exit(1);
    }
};

// If we were to not write "exports" before the connectDB function, we would be able to export it using the following code
// module.exports = connectDB;