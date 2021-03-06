const mongoose = require('../database')
const Schema = mongoose.Schema

const QuestionSchema = new Schema({
    pergunta: {
        type: String,
        required: true
    },
    respostaCorreta: {
        type: String,
        required: true
    },
    respostaErrada: {
        type: String,
        required: true
    },
    respostaErrada2: {
        type: String,
        required: true
    },
    respostaErrada3: {
        type: String,
        required: true
    },
    respostaErrada4: {
        type: String,
        required: true
    },
    videoURL: {
        type: String,
        required: false
    },
    imagemURL: {
        type: String,
        required: false
    },
    imagemGabaritoURL: {
        type: String,
        required: false
    },
    pontos: {
        type: Number,
        required: false
    },
});

module.exports = mongoose.model('questions', QuestionSchema);