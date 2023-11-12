import { connected } from "process";
import { app } from "./app";
import connectDB from "./util/db";
require("dotenv").config();

//create server
app.listen(process.env.PORT, () => {
  console.log(`Server is connected with port ${process.env.PORT}`);
  connectDB();
});
