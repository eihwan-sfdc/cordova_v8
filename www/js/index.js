var app = {

    // 初期化(このJSの一番下で呼ばれる)
    initialize: function() {
        document.addEventListener(
            'deviceready', this.onDeviceReady.bind(this), false);
    },

    // 各種紐づけ
    onDeviceReady : function () {

        console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
        document.getElementById('deviceready').classList.add('ready');

        MCCordovaPlugin.getContactKey(app.handleContactKey);
        MCCordovaPlugin.setOnNotificationOpenedListener(app.notificationOpened);

        document.getElementById('setContactKey')
            .addEventListener('click', app.contactKeySubmit);
        document.getElementById('logSdkState')
            .addEventListener('click', app.logSdkState);

        
    }, 

    // ここから下が実際の処理
    handleContactKey: function(key) {
        document.getElementById('contactKey').value = key;
    },
    contactKeySubmit: function() {
        MCCordovaPlugin.setContactKey(
            document.getElementById('contactKey').value);
    },
    logSdkState : function () {
        MCCordovaPlugin.logSdkState();
    },
    notificationOpened : function (value) {
        var jsonString = JSON.stringify(value, null, 4);
        console.log(jsonString);
    },


};

app.initialize();
