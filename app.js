var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const cors = require('cors');

// import restc
const restc = require('restc');


//公共 -- 获取公钥API
var publicKey = require('./routes/public-key');
//公共 -- 登录API
var publicLogin = require('./routes/public-login');

//公共 -- 拼音模糊搜索
var pysearch = require('./routes/pysearch');

// 热门工具
var pt = require('./routes/pt');

// 音频工具api	audio.js
var audio = require('./routes/audio');

// 写作工具api	writing-tools.js
var writingTools = require('./routes/writing-tools');

// 常用图像工具api	image-tools.js
var imageTools = require('./routes/image-tools');

// 图片插画生成api	illustration-tools.js
var illustrationTools = require('./routes/illustration-tools');

// 图片背景移除api	background-removal-tools.js
var backgroundRemovalTools = require('./routes/background-removal-tools');


// 图片无损放大api	image-enhancement-tools.js
var imageEnhancementTools = require('./routes/image-enhancement-tools');

// 图片优化修复api	image-repair-tools.js
var imageRepairTools = require('./routes/image-repair-tools');

// 图片物体抹除api	object-removal-tools.js
var objectRemovalTools = require('./routes/object-removal-tools');

// 视频工具api	video-tools.js
var videoTools = require('./routes/video-tools');

// 设计工具api	design-tools.js
var designTools = require('./routes/design-tools');

// 编程工具api	programming-tools.js  
var programmingTools = require('./routes/programming-tools');


// 对话聊天api	chat-tools.js 
var chatTools = require('./routes/chat-tools');

// 办公工具api	office-tools.js
var officeTools = require('./routes/office-tools');


// 语言翻译api	translation-tools.js
var translationTools = require('./routes/translation-tools');


// 内容检测api	content-detection-tools.js
var contentDetectionTools = require('./routes/content-detection-tools');

// 提示指令api	prompting-tools.js
var promptingTools = require('./routes/prompting-tools');

// 训练模型api	training-model-tools.js
var trainingModelTools = require('./routes/training-model-tools');

// 学习网站api	learning-sites.js
var learningSites = require('./routes/learning-sites');

// 开发框架api	development-frameworks.js	
var developmentFrameworks = require('./routes/development-frameworks');


// 自研工具api	self-developed-tools.js
var selfDevelopedTools = require('./routes/self-developed-tools');

// 密码修改api	user-profile/password-change.js
var passwordChange = require('./routes/user-profile/password-change');


// 工具类别		/my-tools/categories.js
var categories = require('./routes/my-tools/categories');



// 我的工具 -- 列表api		/my-tools/list.js
var list = require('./routes/my-tools/list');


// 新建api		/my-tools/create.js
var create = require('./routes/my-tools/create');

// 编辑api		/my-tools/edit.js
var edit = require('./routes/my-tools/edit');


// 删除api		/my-tools/delete.js
var del = require('./routes/my-tools/delete');

// icon图片上传api	/my-tools/upload-icon.js
var uploadIcon = require('./routes/my-tools/upload-icon');

// 缩略图图片上传api	/my-tools/upload-thumbnail.js
var uploadThumbnail = require('./routes/my-tools/upload-thumbnail');



// 删除api		/admin/review-tools/delete.js
var reviewDel = require('./routes/admin/review-tools/delete');



// 通过审核		/admin/review-tools/approve.js
var reviewApprove = require('./routes/admin/review-tools/approve');


// 不通过审核		/admin/review-tools/reject.js
var reviewReject = require('./routes/admin/review-tools/reject');


// 列表api -- 管理员		/admin/review-tools/list.js
var reviewList = require('./routes/admin/review-tools/list');














var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');



var app = express();


app.use(cors({
  origin: '*'  // 只允许 http://example.com 可以访问
}));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(restc.express());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/users', usersRouter);

// 公共 -- 获取公钥API
app.use('/public-key', publicKey);


//公共 -- 登录API
app.use('/public-login', publicLogin);

//公共 -- 拼音模糊搜索
app.use('/pysearch', pysearch);

// 热门工具
app.use('/pt', pt);


// 音频工具api	audio.js
app.use('/audio', audio);

// 写作工具api	writing-tools.js
app.use('/writing-tools', writingTools);

// 常用图像工具api	image-tools.js
app.use('/image-tools', imageTools);

// 图片插画生成api	illustration-tools.js
app.use('/illustration-tools', illustrationTools);

// 图片背景移除api	background-removal-tools.js
app.use('/background-removal-tools', backgroundRemovalTools);

// 图片无损放大api	image-enhancement-tools.js
app.use('/image-enhancement-tools', imageEnhancementTools);

// 图片优化修复api	image-repair-tools.js
app.use('/image-repair-tools', imageRepairTools);

// 图片物体抹除api	object-removal-tools.js
app.use('/object-removal-tools', objectRemovalTools);

// 视频工具api	video-tools.js
app.use('/video-tools', videoTools);

// 设计工具api	design-tools.js
app.use('/design-tools', designTools);

// 编程工具api	programming-tools.js
app.use('/programming-tools', programmingTools);

// 对话聊天api	chat-tools.js
app.use('/chat-tools', chatTools);

// 办公工具api	office-tools.js
app.use('/office-tools', officeTools);

// 语言翻译api	translation-tools.js
app.use('/translation-tools', translationTools);

// 内容检测api	content-detection-tools.js
app.use('/content-detection-tools', contentDetectionTools);

// 提示指令api	prompting-tools.js
app.use('/prompting-tools', promptingTools);

// 训练模型api	training-model-tools.js
app.use('/training-model-tools', trainingModelTools);

// 学习网站api	learning-sites.js
app.use('/learning-sites', learningSites);

// 开发框架api	development-frameworks.js
app.use('/development-frameworks', developmentFrameworks);

// 自研工具api	self-developed-tools.js
app.use('/self-developed-tools', selfDevelopedTools);

// 密码修改api	user-profile/password-change.js
app.use('/user-profile/password-change', passwordChange);

// 工具类别		/my-tools/categories.js
app.use('/my-tools/categories', categories);

// 我的工具 -- 列表api		/my-tools/list.js
app.use('/my-tools/list', list);

// 新建api		/my-tools/create.js
app.use('/my-tools/create', create);

// 编辑api		/my-tools/edit.js
app.use('/my-tools/edit', edit);

// 删除api		/my-tools/delete.js
app.use('/my-tools/delete', del);

// icon图片上传api	/my-tools/upload-icon.js
app.use('/my-tools/upload-icon', uploadIcon);

// 缩略图图片上传api	/my-tools/upload-thumbnail.js
app.use('/my-tools/upload-thumbnail', uploadThumbnail);

// 删除api		/admin/review-tools/delete.js
app.use('/admin/review-tools/delete', reviewDel);

// 通过审核		/admin/review-tools/approve.js
app.use('/admin/review-tools/approve', reviewApprove);

// 不通过审核		/admin/review-tools/reject.js
app.use('/admin/review-tools/reject', reviewReject);

// 列表api -- 管理员		/admin/review-tools/list.js
app.use('/admin/review-tools/list', reviewList);
















// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
