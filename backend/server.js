require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Ruta para obtener una lista de Pokémon
app.get('/api/pokemon', async (req, res) => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error obteniendo datos de PokeAPI' });
    }
});

// Ruta para obtener los detalles de un Pokémon
app.get('/api/pokemon/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'No se encontró el Pokémon' });
    }
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
