const api = require('../controllers/customer-controller')

module.exports = (app) => {

    app.route('/customers')
        .post(api.save)
        .get(api.findAll)

}