const router = require('express').Router()
const {createPoll,getNotiffication,getPollById ,replay,deletePoll} = require('../controllers/greenEyeController')

router.post('/',createPoll)
router.get('/my',getNotiffication)
router.get('/:id',getPollById)
router.post('/replay',replay)
router.delete('/:id',deletePoll)
module.exports = router