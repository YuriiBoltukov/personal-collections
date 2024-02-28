const express = require("express");
const {collections} = require("../controllers/collections");
const collectionsRouter = express.Router();

collectionsRouter.get('/collections', collections);

module.exports.collectionsRouter = collectionsRouter;