cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-marketingcloudsdk.MCCordovaPlugin",
      "file": "plugins/cordova-plugin-marketingcloudsdk/www/MCCordovaPlugin.js",
      "pluginId": "cordova-plugin-marketingcloudsdk",
      "clobbers": [
        "MCCordovaPlugin"
      ]
    },
    {
      "id": "cordova-plugin-marketingcloudsdk.SFMCEvent",
      "file": "plugins/cordova-plugin-marketingcloudsdk/www/event.js",
      "pluginId": "cordova-plugin-marketingcloudsdk",
      "clobbers": [
        "SFMCEvent"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-marketingcloudsdk": "8.1.0"
  };
});