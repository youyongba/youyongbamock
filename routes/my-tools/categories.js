var express = require('express');
var router = express.Router();
var Mock = require('mockjs');
var Random = Mock.Random;

/* GET home page. */
router.get('/', function (req, res, next) {
  // 定义 status 和 message 的可能值
  var statuses = [true, false]; // 假设 status 只有 true 和 false
  var messages = ["成功", "错误的请求", "未找到资源", "服务器内部错误"]; // 预定义一些可能的消息

  var colors = ['#e56045', '#ffB9b2', '#cc553d', '#736357', '#f7941d', '#ffd199', '#cc7b18', '#53cfc8', '#a1e5e2', '#609996', '#00aeef', '#8bdfff', '#007ba9'];


  // 使用 Mock.js 模拟数据
  // 使用 Mock.js 模拟数据
  var data = Mock.mock({
    // 从预定义的状态中随机挑选一个
    "status": Random.pick(statuses),
    // 从预定义的消息中随机挑选一个
    "message": Random.pick(messages),
    "data|3-10": [{ // 随机生成1到10条数据
      "name": "@ctitle", // 标题
      "icon": Random.image('32x32', Random.pick(colors), '#FFF', 'logo'), // 图标
      "description": "@cparagraph(1, 3)", // 描述
      "id": "@id", // ID
    }]
  });

  res.json(data);
});

module.exports = router;