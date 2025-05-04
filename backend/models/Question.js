const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    texte: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        enum: ['choix_unique', 'choix_multiple', 'texte', 'nombre', 'date'],
        default: 'choix_unique'
    },
    options: {
        type: [String],
        default: []
    },
    categorie: {
        type: String,
        required: true,
        trim: true
    },
    ordre: {
        type: Number,
        required: true
    },
    conditionAffichage: {
        question: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question'
        },
        reponse: {
            type: mongoose.Schema.Types.Mixed
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Question', QuestionSchema);