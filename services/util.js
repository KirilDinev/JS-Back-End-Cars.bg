function accessoryViewModel(accessory) {
    return {
        id: accessory._id,
        name: accessory.name,
        description: accessory.description,
        imageURL: accessory.imageURL,
        price: accessory.price,
    }
}


function carViewModel(car) {
    const model = {
        id: car._id,
        name: car.name,
        description: car.description,
        imageURL: car.imageURL || undefined,
        price: car.price,
        accessories: car.accessories
    }

    if (model.accessories.length > 0 && model.accessories[0].name) {
        model.accessories = model.accessories.map(accessoryViewModel);
    }

    return model
}

module.exports = {
    accessoryViewModel,
    carViewModel
}