import express from "express";

const routes = express.Router();

routes.get("/", (request, response) => response.send("Hello World!!"));

export default routes;
