const pincodeController = require('../controller/pincode/pincode.controller')

module.exports = (app) => {

    app.post('/addpincode', pincodeController.addPincode)

};