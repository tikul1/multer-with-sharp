const express = require("express");
const router = express.Router();
const { picUpload } = require("../controller/picController");
const upload = require("../helper/imageHelper");
router.post("/pic", upload.single("image"), picUpload);

module.exports = router;
