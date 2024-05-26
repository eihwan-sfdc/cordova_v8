cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-marketingcloudsdk/www/MCCordovaPlugin.js",
        "id": "cordova-plugin-marketingcloudsdk.MCCordovaPlugin",
        "pluginId": "cordova-plugin-marketingcloudsdk",
        "clobbers": [
            "MCCordovaPlugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-marketingcloudsdk/www/event.js",
        "id": "cordova-plugin-marketingcloudsdk.SFMCEvent",
        "pluginId": "cordova-plugin-marketingcloudsdk",
        "clobbers": [
            "SFMCEvent"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-marketingcloudsdk": "8.1.0"
}
// BOTTOM OF METADATA
});