const router = require('express').Router()
const {register,getProfile,setSettings}= require ('../controllers/userController')
router.post('/register',register)
router.get('/profile',getProfile)
router.patch('/settings',setSettings)
module.exports = router