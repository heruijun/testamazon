cordova.define("com.childfolio.amazon.AmazonS3", function(require, exports, module) {
var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'AmazonS3', 'upload', [arg0]);
};

});
