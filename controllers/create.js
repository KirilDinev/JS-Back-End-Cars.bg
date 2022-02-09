module.exports = {
    get(req, res) {
        res.render('create', { title: 'Create Listing' })
    },
    async post(req, res) {
        const car = {
            name: req.body.name,
            description: req.body.description,
            imageURL: req.body.imageURL || undefined,
            price: Number(req.body.price)
        }

        await req.storage.createCar(car);

        res.redirect('/')
    }
}