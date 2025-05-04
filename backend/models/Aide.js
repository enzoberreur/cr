const mongoose = require('mongoose');

const AideSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    organisme: {
        type: String,
        required: true,
        trim: true
    },
    conditions: [{
        critere: String,
        valeur: mongoose.Schema.Types.Mixed,
        operateur: {
            type: String,
            enum: ['egal', 'inferieur', 'superieur', 'contient', 'entre'],
            default: 'egal'
        }
    }],
    documentsRequis: [{
        type: String,
        trim: true
    }],
    montantEstime: {
        type: Number
    },
    lienFormulaire: {
        type: String,
        trim: true
    },
    contacts: [{
        nom: String,
        telephone: String,
        email: String
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Aide', AideSchema);