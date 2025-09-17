const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const messageRoutes = require("./routes/messageRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/messages", messageRoutes);

//Connect DB & Start Server
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(process.env.PORT, () => 
        console.log(`Server is running at http://localhost:${process.env.PORT}`)
        );
    })
    .catch((err) => console.error("Lad, the connection failed.", err));