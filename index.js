const express = require("express");
const app = express();
const DB = require("./database").connectDB;

// The difference between the above code and const DB = require("./database").connectDB(); is that the above code makes a reference to the connect DB function wherewas this code executes it

// Routes
const authRouter = require("./routes/authRoutes");

//Connect to our database:
DB();

app.use(express.json());
app.use("/api/auth", authRouter);

// The signup path: http://localhost:3000/api/auth/signup

app.listen(process.env.PORT, ()=>{
    console.log(`Listening on port: ${process.env.PORT}`);
});

