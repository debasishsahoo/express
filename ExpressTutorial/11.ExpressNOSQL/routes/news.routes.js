const express = require('express');
const router = express.Router();
const NewsCtrl = require('../controllers/news.controller')

router.post('/', NewsCtrl.create)
router.put('/:id', NewsCtrl.edit)
router.delete('/:id', NewsCtrl.delete)
router.get('/', NewsCtrl.viewAll)
router.get('/:id', NewsCtrl.view)
module.exports = router;