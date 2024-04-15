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
    "data": {
      "list|3-10": [{ // 随机生成1到10条数据
        // "thumbnail": "247.5*116", // 缩略图尺寸
        "thumbnail": Random.image('247.5x116', Random.pick(colors), '#FFF', '产品截图尺寸247.5*116'), // 缩略图尺寸
        "title": "@ctitle", // 标题
        "icon": Random.image('32x32', Random.pick(colors), '#FFF', 'logo'), // 图标
        "description": "@cparagraph(1, 3)", // 描述
        "id": "@id", // ID
        "url": "@url", // URL
        "pinyin": "@first", // 拼音
        "isTrending|1": [true, false], // ，随机真假值
        "isApproved|1": [true, false], // 是否批准
        "isAdmin|1": [true,false], // 是否为管理员
        "publishedAt": "@date", // 发布日期，随机生成
        "publisher": "@cname" // 发布者，随机生成中文名字
      }],
      "total": "@integer(10, 100)",
    }
    
  });

  res.json(data);
});

module.exports = router;