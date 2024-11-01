// backend/models/favorite.js
const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  id: Number,
  name: String,
  species: String,
  status: String,
  image: String,
});

module.exports = mongoose.model('Favorite', favoriteSchema);
