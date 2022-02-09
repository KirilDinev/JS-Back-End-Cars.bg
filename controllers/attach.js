module.exports = {
    async get(req, res) {
        const id = req.params.id;

        try {
            const car = await req.storage.getById(id);
            res.render('attach', { title: 'Attach Accessory', car })
        } catch (err) {
            console.log(err.message);
            res.redirect('404');
        }

    },
    async post(req, res) {
        res.redirect('/')
    }
}