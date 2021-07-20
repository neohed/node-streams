const express = require('express');
const router = express.Router();
const fs = require("fs");
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  const file_path = path.join(__dirname, '../../data/4300-0.txt');
  const rs = fs.createReadStream(file_path);
  const { size } = fs.statSync(file_path);

  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Length", size);

  rs.pipe(res);
});

module.exports = router;
