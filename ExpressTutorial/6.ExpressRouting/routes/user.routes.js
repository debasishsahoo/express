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

