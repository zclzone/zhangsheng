const express = require('express');
const router = express.Router();
const article = require('../model/article');
const fs = require('fs');
const path = require('path');

let dataPath = path.join(__dirname, '../../static/data/');

router.get('/getArticles', function(req, res) {
  article.find(function(err, articles) {
    if (!err) {
      res.send({ status: 0, list: articles });
    }
  });
});

router.get('/getArticle', function(req, res) {
  let id = req.query.id;
  article.findOne({ _id: id }, function(err, data) {
    if (!err) {
      res.send({ status: 0, article: data });
    }
  });
});

router.post('/add', function(req, res) {
  let articleReq = req.body;
  const date = new Date();
  articleReq.date = date;
  //解决时区问题
  // date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  // articleReq.date = date.toISOString();
  if (articleReq._id) {
    article.findOneAndUpdate({ _id: articleReq._id }, articleReq, function(
      err
    ) {
      if (!err) {
        res.send({ status: 0, msg: '保存成功！' });
      }
    });
  } else {
    articleReq._id = null;
    new article(articleReq).save(function(err) {
      if (!err) {
        res.send({ status: 0, msg: '添加成功！' });
      }
    });
  }
});

//发布，从数据库读数据写到本地文件
router.get('/publish', function(req, res) {
  article.find(function(err, data) {
    if (!err) {
      // let articles = [];
      // let article = {};
      // for (let item of data) {
      //   article = {
      //     _id: item._id,
      //     title: item.title,
      //     introduce: item.introduce,
      //     type: item.type,
      //     content_html: item.content_html,
      //     content_md: item.content_md,
      //     clickCount: 99,
      //     date: item.date
      //   };
      //   articles.push(article);
      // }

      // let articlesFile = JSON.stringify({
      //   articles: articles
      // });

      // fs.writeFile(dataPath + 'articles.json', articlesFile, function(err) {
      //   if (!err) {
      //     res.send({ status: 0, msg: '发布成功' });
      //   }
      // });

      let articleList = [];
      for (let item of data) {
        articleList.push({
          _id: item._id,
          title: item.title,
          introduce: item.introduce,
          type: item.type,
          clickCount: 99,
          date: item.date
        });
      }

      let listFile = JSON.stringify({ articleList: articleList }, null, 2);

      //同步写入
      fs.writeFileSync(dataPath + 'articleList.json', listFile);

      //将每一篇文章发布成单独的json文件，提高请求速度
      let article = {};
      let articleFile = null;
      for (let item of data) {
        article = {
          _id: item._id,
          title: item.title,
          type: item.type,
          content_html: item.content_html,
          content_md: item.content_md,
          clickCount: 99,
          date: item.date
        };
        articleFile = JSON.stringify({ article: article }, null, 2);

        //同步写入
        fs.writeFileSync(dataPath + `${article._id}.json`, articleFile);
      }
      res.send({ status: 0, msg: '发布成功' });
    }
  });
});

module.exports = router;
