/**
 * Created by micky_G on 12/20/16.
 *
 */

//Migration when you need to project, and is not convenient to CMS address with original image file,
//it can help you save time, unified images downloaded to a local folder

//依赖模块
var fs = require('fs');
var request = require("request");
var mkdirp = require('mkdirp');
var path = require('path');

//本地存储目录
var dir = path.join(__dirname + '/../images');

//创建目录
mkdirp(dir, function(err) {
    if(err){
        console.log(err);
    }
});

// 图片下载地址
// 这个地址如果没有，可以换成spiderPic.js操作

var urlArr = [
    'http://m.pingan.com/app_images/wap/v30/c3/chaoshi/sys/daikuan/xiaoxiao1.jpg',
    'http://m.pingan.com/app_images/wap/v30/c3/chaoshi/sys/daikuan/xiaoxiao2.jpg',
    'http://m.pingan.com/app_images/wap/v30/c3/chaoshi/sys/daikuan/xiaoxiao3.jpg',
    'http://m.pingan.com/app_images/wap/v30/c3/chaoshi/sys/daikuan/xiaoxiao4.jpg',
    'http://m.pingan.com/app_images/wap/v30/c3/chaoshi/sys/daikuan/xinyidai1.jpg',
    'http://m.pingan.com/app_images/wap/v30/c3/chaoshi/sys/daikuan/xinyidai2.jpg',
    'http://m.pingan.com/app_images/wap/v30/c3/chaoshi/sys/daikuan/xinyidai3.jpg',
    'http://m.pingan.com/app_images/wap/v30/c3/chaoshi/sys/daikuan/xinyidai4.jpg',
    'http://m.pingan.com/app_images/wap/v30/c3/chaoshi/sys/daikuan/baodandai1.jpg',
    'http://m.pingan.com/app_images/wap/v30/c3/chaoshi/sys/daikuan/baodandai2.jpg',
    'http://m.pingan.com/app_images/wap/v30/c3/chaoshi/sys/daikuan/baodandai3.jpg',
    'http://m.pingan.com/app_images/wap/v30/c3/chaoshi/sys/daikuan/baodandai4.jpg',
    'http://m.pingan.com/app_images/wap/v30/c3/chaoshi/sys/daikuan/chedidai1.jpg',
    'http://m.pingan.com/app_images/wap/v30/c3/chaoshi/sys/daikuan/chedidai2.jpg',
    'http://m.pingan.com/app_images/wap/v30/c3/chaoshi/sys/daikuan/chedidai3.jpg',
    'http://m.pingan.com/app_images/wap/v30/c3/chaoshi/sys/daikuan/chedidai4.jpg'
];

// 主要方法，用于下载文件
var download = function(url, dir, filename){
    request.head(url, function(err, res, body){
        request(url).pipe(fs.createWriteStream(dir + "/" + filename));
    });
};

urlArr.map(function(val) {
    download(val, dir, val.split('daikuan/')[1]);
})