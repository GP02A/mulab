// load the things we need
var express = require('express');
var app = express();
var fs = require('fs');
const crypto = require('crypto');
const wechatapi = require('@musaka/node-wechat-api')
//const wxconfig = require('./config');

/*/引入token刷新
const getToken = require('./wechat/token');
getToken();
*/

/*创建菜单
const createMenu = require('./wechat/wxCustomeMenu');
createMenu();
*/
app.use(express.static('public'));
// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/',function(req, res){
	res.render('index',{title:'Home',body:'test body text'});
});

app.get('/tools/bmi',function(req, res){
	const clientUrl = 'http://' + req.hostname + req.url;
	const jsconfig = wechatapi.cjsconfig(clientUrl);
	res.render('pages/tools/bmi',{title:'Body Mass Index', ai: jsconfig.appid, ts:jsconfig.timestamp, ns: jsconfig.nonceStr, sg:jsconfig.signature });
});

app.get('/tools/bmi-bk',function(req, res){
	const clientUrl = 'http://' + req.hostname + req.url;
	const jsconfig = wechatapi.cjsconfig(clientUrl);
	res.render('pages/tools/bmi-bk',{title:'Body Mass Index', ai: jsconfig.appid, ts:jsconfig.timestamp, ns: jsconfig.nonceStr, sg:jsconfig.signature });
});

app.listen(80, function () {
  console.log('Example app listening on port 3000!')
});
