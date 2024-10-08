const router = require("express").Router();
const {
  register,
  getProfile,
  setSettings,
} = require("../controllers/userController");
const { onlySoldiersAndCommanders } = require("../middlewares/authMiddlewares");
/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Register a new user
 *     description: Create a new user in the system.
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
 *               role:
 *                 type: string
 *                 example: "commander"
 *               area:
 *                 type: string
 *                 example: "center"
 *               units:
 *                 type: array
 *                 items:
 *                   type: integer
 *                 example: [123, 3546]
 *     responses:
 *       201:
 *         description: User registered successfully.
 *       400:
 *         description: Invalid input data.
 */

router.post("/register", register);

/**
 * @swagger
 * /user/profile:
 *   get:
 *     summary: Retrieve user profile
 *     description: Retrieve the profile information of the authenticated user.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 userName:
 *                   type: string
 *                 settings:
 *                   type: object
 *                   properties:
 *                     notifications:
 *                       type: boolean
 *       401:
 *         description: Unauthorized, user not authenticated.
 */
router.get("/profile", onlySoldiersAndCommanders, getProfile);

/**
 * @swagger
 * /users/settings:
 *   patch:
 *     summary: Update user settings
 *     description: Update settings for the authenticated user.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               notifications:
 *                 type: boolean
 *                 example: true
 *               theme:
 *                 type: string
 *                 example: "dark"
 *     responses:
 *       200:
 *         description: User settings updated successfully.
 *       400:
 *         description: Invalid input data.
 *       401:
 *         description: Unauthorized, user not authenticated.
 */
router.patch("/settings", onlySoldiersAndCommanders, setSettings);

module.exports = router;
