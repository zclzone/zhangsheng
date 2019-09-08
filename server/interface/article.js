let express = require('express');
let router = express.Router();
let article = require('../model/article');

router.post('/add', function(req, res) {
  let articleReq = req.body;
  new article(articleReq).save(function(err) {
    if (err) {
      res.status(500).send(err);
    }
    res.send({ status: 0, msg: '添加成功！' });
  });
});

module.exports = router;
