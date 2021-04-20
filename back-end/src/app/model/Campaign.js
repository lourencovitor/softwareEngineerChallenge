const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    bid: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    advertiser: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Campaign", CampaignSchema);
