//依赖模块
var fs = require('fs');
var request = require("request");
var cheerio = require("cheerio");
var mkdirp = require('mkdirp');

//目标网址
var url = 'http://www.win4000.com/meinvtag2.html';
var headers = {'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39'};

//本地存储目录
var dir = './images';

//创建目录
mkdirp(dir, function(err) {
    if(err){
        console.log(err);
    }
});

//发送请求
request(url,headers, function(error, response, body) {
    var $ = cheerio.load(body);
    $('ul .box').each(function() {
        var src = $(this).find('img').attr('src');
        if(src) {
            download(src, dir, Math.floor(Math.random()*100000) + src.substr(-4,4));     
        }
    });
});

//下载方法
var download = function(url, dir, filename){
    request.head(url, function(err, res, body){
        request(url).pipe(fs.createWriteStream(dir + "/" + filename));
    });
};




