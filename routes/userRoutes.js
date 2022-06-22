const express = require('express');

//import middlewares
const {
    protect,
    filterUser} = require('../middleware/auth');

//importing controllers
const { postingUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser ,
    loginUser} = require('../controllers/userControllers');

//initializing router
const router = express.Router();


router.route('/')
        .get(protect, getAllUsers)
        .post(postingUser)

router.route('/:id')
        .put(protect, updateUser)
        .delete([protect, filterUser['ADMIN']], deleteUser)
        .get(getUserById)

router.route('/login')
        .post(loginUser)


//exporting router
module.exports.userRoutes = router;

