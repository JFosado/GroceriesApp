import express from "express";
import morgan from "morgan";
import ejs from "ejs";
import productsRouter from "./routes/products.routes.js";

import { config } from "dotenv";

config();

const app = express();

//Settings
app.set("view engine", "ejs");

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/api/products", productsRouter);

export default app;
