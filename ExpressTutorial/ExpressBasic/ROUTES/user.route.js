const express = require('express');
const router = express.Router()

const {
    GetAllUser,
    GetUserById,
    UpdateUserById,
    DeleteUserById,
    BlockUserById,
    SignUp,
    SignIn,
    PasswordChange
} = require('../CONTROLLERS/user.controller')


router.route("/").get(GetAllUser)

router.route('/:id')
    .get(GetUserById)
    .put(UpdateUserById)
    .patch(BlockUserById)
    .delete(DeleteUserById)

router.route('/signup').post(SignUp)
router.route('/signin').post(SignIn)

router.route('/:id/email/:email').patch(PasswordChange)


module.exports = router
