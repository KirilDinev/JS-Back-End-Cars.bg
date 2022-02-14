const Accessory = require('../models/Accessory.js');
const { accessoryViewModel } = require('./util.js')


async function getAll(params) {
    const data = await Accessory.find({});
    return data.map(accessoryViewModel)
}

async function createAccessory(accessory) {
    await Accessory.create(accessory);
}

module.exports = () => (req, res, next) => {
    req.accessory = {
        createAccessory,
        getAll,
    }
    next();
}