require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require('./routes/authRoutes');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connect DB
connectDB();

// routes
app.use('/api', authRoutes);

// test route
app.get("/", (req, res) => {
    res.send("Physio API running");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);
