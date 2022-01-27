const express = require('express');
const router = express.Router();
const UserCtrl = require('../controllers/user.controller')
const NewsCtrl = require('../controllers/news.controller')


router.get('/user', UserCtrl.viewAll)
router.get('/news', NewsCtrl.viewAll)
router.get('/user/:id', UserCtrl.view)
router.get('/news/:id', NewsCtrl.view)
router.put('/user/report/:id', UserCtrl.blockUser)
router.put('/news/report/:id', NewsCtrl.blockNews)

router.post('/', NewsCtrl.create)
router.put('/:id', NewsCtrl.edit)
router.delete('/:id', NewsCtrl.delete)



module.exports = router;