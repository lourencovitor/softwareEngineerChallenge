const Campaign = require("../model/Campaign");

class CampaignController {
  async store(req, res) {
    try {
      const { name, bid, type, publisher, advertiser, country } = req.body;
      const data = await Campaign.create({
        name,
        bid,
        type,
        publisher,
        advertiser,
        country,
      });
      return res.status(201).json(data);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  async show(req, res) {
    try {
      const { country } = req.params;
      let data = {};
      if (country) {
        data = Campaign.find({ country });
      } else {
        data = Campaign.find();
      }
      data = await data.sort({ bid: -1 }).limit(1);
      return res.status(200).json(data && data[0]);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new CampaignController();
