// Controller for home page

var IndexController = {};

// GET: Renders home page at http://localhost:3000/
IndexController.renderIndex = (req, res) => {
    res.render('index', { sheet: 'index' });
};

module.exports = IndexController;