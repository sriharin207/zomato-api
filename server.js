const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;

const { customErrorHandler } = require("./middleware/customErrorHandler");
const { connectDB } = require("./config/db");

connectDB();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use("/api", require("./routes/router"));
app.get("/", (req, res) => res.send("hello world"));
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../build")));
//   app.get("/*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "../", "build", "index.html"))
//   );
// }

app.use(customErrorHandler);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
