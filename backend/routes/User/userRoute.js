const express = require('express')
const {registerUser, loginUser, logout, deleteUser} = require('../../controllers/User/userController')

const router = express.Router()

router.route('/register').post(registerUser)

router.route('/login').post(loginUser)

router.route('/logout').get(logout)

router.route('/delete/:id').delete(deleteUser)


module.exports = router




module.exports = router