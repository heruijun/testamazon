cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "com.hrj.demo.toast.MyToast",
    "file": "plugins/com.hrj.demo.toast/www/MyToast.js",
    "pluginId": "com.hrj.demo.toast",
    "clobbers": [
      "cordova.plugins.MyToast"
    ]
  },
  {
    "id": "com.childfolio.amazon.AmazonS3",
    "file": "plugins/com.childfolio.amazon/www/AmazonS3.js",
    "pluginId": "com.childfolio.amazon",
    "clobbers": [
      "cordova.plugins.AmazonS3"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "com.hrj.demo.toast": "1.0.0",
  "com.childfolio.amazon": "1.0.0"
};
// BOTTOM OF METADATA
});