let express = require('express');
let router = express.Router();
let userController = require('../controller/user.controller');

router.route('/getname').get(userController.getname);

router.route('/insertname').post(userController.insertname);

module.exports = router ;