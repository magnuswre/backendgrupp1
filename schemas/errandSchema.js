const mongoose = require('mongoose');

const errandSchema = mongoose.Schema({
    email:          { type: String, required: true },
    subject:        { type: String, required: true },
    message:        { type: String, required: true },
    //Checka att Number och deafault är rätt.
    status:         { type: Number, default: 1 }
}, { timestamps: true })

module.exports = mongoose.model('Errand', errandSchema);