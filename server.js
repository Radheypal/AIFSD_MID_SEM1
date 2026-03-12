const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use(express.static("public"));

app.use("/api", productRoutes);

// 👇 यह add करो
app.get("/", (req, res) => {
res.sendFile(__dirname + "/public/index.html");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log("Server running on port " + PORT);
});