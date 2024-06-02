//! first of all, connection to data base
import connect from "./config/db_connection.js";

// dependencies imports
import express from "express";
const app = express();

import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

connect();

// routes imports
import userRouter from "./routes/userRoute.js";
import contactRouter from "./routes/contactRoute.js";
import countryRouter from "./routes/countryRoute.js";
import tagRouter from "./routes/tagRoute.js";
import poisRouter from "./routes/personOfInterestsRoute.js";
import eventRouter from "./routes/eventRoute.js";
import uploadRouter from "./routes/imageUploadRoute.js";

app.use("/api/users", userRouter);
app.use("/api/contacts", contactRouter);
app.use("/api/countries", countryRouter);
app.use("/api/tags", tagRouter);
app.use("/api/person-of-interest", poisRouter);
app.use("/api/events", eventRouter);
app.use("/api/upload", uploadRouter);


const __dirname = path.resolve();
app.use("/uploads", express.static(__dirname + "/uploads"));

app.listen(process.env.PORT, () =>
  console.log("listening on port " + process.env.PORT)
);
