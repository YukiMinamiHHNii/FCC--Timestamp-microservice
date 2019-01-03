const express = require("express"),
			dotenv = require("dotenv").load(),
			cors= require("cors"),
			timestampRouter = require("./src/routers/timestamp");
const app = express();

app.use(cors());

app.use(express.static(__dirname + "/public"));
app.use("/", express.static(__dirname + "/views"));
app.use("/api/timestamp", timestampRouter);

app.listen(process.env.SERVER_PORT);

console.log(`Server running at ${process.env.SERVER_PORT}`);
