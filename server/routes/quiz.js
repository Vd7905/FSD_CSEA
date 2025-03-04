const express = require("express")
const router = express.Router();

const {createUser} = require("../controllers/createUser")
const {getUser,getUserById} = require("../controllers/getUser")
const {updateUser} = require("../controllers/updateUser")
const {deleteUser} = require("../controllers/deleteUser")

router.post("/createUser",createUser)
router.get("/getUser",getUser)
router.get("/getUser/:id",getUserById)
router.put("/updateUser/:id",updateUser)
router.delete("/deleteUser/:id",deleteUser)

module.exports = router;