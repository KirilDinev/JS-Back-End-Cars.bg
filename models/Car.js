const { Schema, model } = require('mongoose');

const carSchema = new Schema({
    name: { type: String },
    description: { type: String },
    imageURL: { type: String },
    price: { type: Number }
});

const Car = model('Car', carSchema);

module.exports = Car;