const mongoose = require('mongoose');

const BeneficiaireSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
        trim: true
    },
    prenom: {
        type: String,
        required: true,
        trim: true
    },
    dateNaissance: {
        type: Date,
        required: true
    },
    adresse: {
        rue: String,
        codePostal: String,
        ville: String
    },
    telephone: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true
    },
    situation: {
        familiale: String,
        professionnelle: String,
        logement: String
    },
    revenusAnnuels: {
        type: Number
    },
    aides: [{
        aide: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Aide'
        },
        status: {
            type: String,
            enum: ['eligible', 'non_eligible', 'en_attente', 'obtenue'],
            default: 'en_attente'
        },
        dateObtention: Date
    }],
    reponses: [{
        question: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question'
        },
        valeur: mongoose.Schema.Types.Mixed,
        date: {
            type: Date,
            default: Date.now
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Beneficiaire', BeneficiaireSchema);