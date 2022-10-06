const mongoose = require("mongoose");
const {mongo} = require("mongoose");

const faqSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
        trim: true
    },
    answer: {
        type: String,
        required: true,
        trim: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
        required: true
    },
    status: {
        type: String,
        default: 'visible',
        enum: ['visible', 'hidden']
    }
}, {
    timestamps: {createdAt: true, updatedAt: true},
    toObject: {virtuals: true},
    toJSON: {virtuals: true}
});

const FAQ = mongoose.model('FAQ', faqSchema);

module.exports = FAQ;
