var express = require('express');
var router = express.Router();
var Mock = require('mockjs');
const { token } = require('morgan');

/* GET login mock */
router.get('/login', function(req, res, next) {
  // 定义 status 和 message 的可能值
  var statuses = [true, false]; // 假设 status 只有 true 和 false
  var messages = ["登录成功", "登录失败"]; // 假设 message 有成功和失败两种情况
  var tokens = ["eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6InVzZXJFeGFtcGxlIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c", ""]
  // 使用 Mock.js 模拟数据
  var data = Mock.mock({
    // 从预定义的状态中随机挑选一个
    "status": Mock.Random.pick(statuses),
    // 根据 status 的值选择对应的 message
    // "message": function() {
    //   return this.status ? "登录成功" : "登录失败";
    // },
    "message":Mock.Random.pick(messages),
    "data": {
      // 模拟一个 JWT 格式的 token
      // "token": function() {
      //   return this.status ? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6InVzZXJFeGFtcGxlIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" : "";
      // },
      "token": Mock.Random.pick(tokens),
      // 使用 Mock.js 提供的随机 ID 和名称生成方法
      "userId": "@id",
      "username": "@name"
    }
  });
  
  res.json(data);
});

module.exports = router;