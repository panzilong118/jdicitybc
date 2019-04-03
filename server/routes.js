const path = require('path');
const __rootPath = path.resolve(__dirname, "../");
const express =require('express');
var router = express.Router();

router.get("/test", function(req, res, next) {
  res.send("test");
});


module.exports = router;
