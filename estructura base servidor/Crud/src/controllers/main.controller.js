const {index} = require ('../models/product.model')
module.exports = {
    home: function(req, res) {
        return res.render ('index', {
            title: "Home",
            products:index().filter(e => req.query && req.query.price ? e.price > parseInt(req.query.price) : e.price > 0)
        })
    }
}