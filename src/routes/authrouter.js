const router = require("express").Router();
const { login, logout } = require("../controllers/authController");
const { onlySoldiersAndCommanders } = require("../middlewares/authMiddlewares");
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: login
 *     description: login to the system.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_name:
 *                 type: string
 *                 example: "itamar"
 *               password:
 *                 type: string
 *                 example: "1234"
 *     responses:
 *       200:
 *         description: User login successfully.
 *       400:
 *         description: Invalid input data.
 */
router.post("/login", login);

router.delete("/logout", onlySoldiersAndCommanders, logout);

module.exports = router;