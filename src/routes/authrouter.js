const router = require("express").Router();
const { login, logout } = require("../controllers/authController");
const { onlySoldiersAndCommanders } = require("../middlewares/authMiddlewares");

router.post("/login", login);

router.delete("/logout", onlySoldiersAndCommanders, logout);

module.exports = router;