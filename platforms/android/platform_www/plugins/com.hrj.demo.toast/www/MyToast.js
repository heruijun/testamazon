cordova.define("com.hrj.demo.toast.MyToast", function(require, exports, module) {
var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'MyToast', 'echo', [arg0]);
};

});
