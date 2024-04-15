var express = require('express');
var router = express.Router();
var Mock = require('mockjs');

/* GET home page. */
router.get('/', function(req, res, next) {
  // 定义 status 和 message 的可能值
  var statuses = [true, false]; // 假设 status 只有 true 和 false
  var messages = ["成功", "错误的请求", "未找到资源", "服务器内部错误"]; // 预定义一些可能的消息

  // 使用 Mock.js 模拟数据
  var data = Mock.mock({
    // 从预定义的状态中随机挑选一个
    "status": Mock.Random.pick(statuses),
    // 从预定义的消息中随机挑选一个
    "message": Mock.Random.pick(messages),
    "data": {
      // 使用正则表达式来生成一个类似公钥的字符串
      // 可以根据需要调整生成规则
      "publicKey": /[A-Z0-9]{64}/
    }
  });
  
  res.json(data);
});

module.exports = router;