const { Schema, model } = require('mongoose');

const heroSchema = new Schema(
  {
    nickname: {
      type: String,
      required: true,
    },
    real_name: {
      type: String,
      required: true,
    },
    origin_description: {
      type: String,
      required: false,
    },
    superpowers: {
      type: String,
      required: false,
    },
    catch_phrase: {
      type: String,
      required: false,
    },
    images: {
      type: String,
      required: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Hero = model('superheroe', heroSchema);

module.exports = Hero;
