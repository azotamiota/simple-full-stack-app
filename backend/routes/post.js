const router = require('express').Router()
const postController = require('../controllers/post')

router.get('/', postController.showAll)
router.post('/', postController.create)

module.exports = router;
