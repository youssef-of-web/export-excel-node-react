const express = require("express");
const { GetExport } = require("../controllers/export.controller");
const router = express.Router();

router.get("/export", GetExport);

module.exports = router;
