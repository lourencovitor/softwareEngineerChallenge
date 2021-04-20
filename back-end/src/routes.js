const express = require("express");

const routes = express.Router();
const CampaignController = require("./app/controller/CampaignController");

routes.get("/campaign/fetch/:country?", CampaignController.show);

routes.post("/campaign", CampaignController.store);

module.exports = routes;
