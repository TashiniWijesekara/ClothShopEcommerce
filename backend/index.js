const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { log } = require("console");
const { type } = require("os");
const { METHODS } = require("http");

const corsConfig = {
    origin: "*",
    credentials: true,
    methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
};

app.use(express.json());
app.use(cors(corsConfig));
