// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Modelo de Favoritos
const Favorite = require('./models/favorites');

// Rutas
app.get('/favorites', async (req, res) => {
  try {
    const favorites = await Favorite.find();
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/favorites', async (req, res) => {
    const { id, name, species, status, image } = req.body;
    try {
        const favorite = new Favorite({ id, name, species, status, image });
        await favorite.save();
        console.log('Favorite added:', favorite); // Verifica que el favorito se esté guardando
        res.status(201).json(favorite);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.delete('/favorites/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Favorite.deleteOne({ id });
    res.status(200).json({ message: 'Favorite removed!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
