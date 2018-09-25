const express = require("express"),
			router = express.Router();

const timestampController = require("../controllers/timestampController");

router.get("/", timestampController.getTime);
router.get("/:date_string", timestampController.getTimestamp);

module.exports = router;
