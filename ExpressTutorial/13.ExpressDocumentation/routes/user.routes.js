const express = require('express');
const router = express.Router();
const UserCtrl = require('../controllers/user.controller')

router.post('/signup', UserCtrl.signup)
router.post('/signin', UserCtrl.signin)
router.post('/:id', UserCtrl.create)
router.get('/:id', UserCtrl.view)
router.patch('/:id', UserCtrl.edit)
router.delete('/:id', UserCtrl.delete)

module.exports = router;

//127.0.0.1:7000/user/signup ---post
//127.0.0.1:7000/user/signin ---post
//127.0.0.1:7000/user/1023  ---post
//127.0.0.1:7000/user/1  ---get
//127.0.0.1:7000/user/1  ---patch
//127.0.0.1:7000/user/1  ---delete

