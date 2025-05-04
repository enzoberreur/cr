const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Chargement des variables d'environnement
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/croix-rouge-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connexion à MongoDB établie'))
.catch(err => console.error('Erreur de connexion à MongoDB:', err));

// Routes
const questionsRoutes = require('./routes/questions');
const aidesRoutes = require('./routes/aides');
const beneficiairesRoutes = require('./routes/beneficiaires');

app.use('/api/questions', questionsRoutes);
app.use('/api/aides', aidesRoutes);
app.use('/api/beneficiaires', beneficiairesRoutes);

// Route par défaut
app.get('/', (req, res) => {
    res.send('API Croix Rouge - Détection des aides');
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});