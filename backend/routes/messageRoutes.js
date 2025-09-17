const express = require("express");
const { getMessages, createMessages } = require("../controller/messageController");

const router = express.Router();

router.get("/", getMessages);
router.post("/", createMessages);

module.exports = router;