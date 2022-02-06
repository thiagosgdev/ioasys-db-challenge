import express from "express";
const bodyParser = require("body-parser");
import { router } from "./routes/user";

const app = express();
app.use(bodyParser.json());

app.use(router);

app.listen(3000, () => {
    console.log("Server running on port http://localhost:3000")
})