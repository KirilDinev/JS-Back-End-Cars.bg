const mongoose = require('mongoose');

require('./Car.js');
require('./Accessory.js');

const connectionString = 'mongodb://localhost:27017/carbicle';

async function init() {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to database');

        mongoose.connection.on('error', (err) => {
            console.error("Database error");
            console.error(err);
        });
    } catch {
        console.error('Error connection to database');
        process.exit(1);
    }
}

module.exports = init;
