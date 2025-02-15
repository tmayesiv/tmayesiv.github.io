const router = require("express").Router();
const {
  newUser,
  getOne,
  login,
  updateOne,
  deleteOne,
} = require("../controllers/userController");

router.post("/", newUser);
router.post("/login", login);
router.get("/:id", getOne);
router.put("/:id", updateOne);
router.delete("/:id", deleteOne);

module.exports = router;