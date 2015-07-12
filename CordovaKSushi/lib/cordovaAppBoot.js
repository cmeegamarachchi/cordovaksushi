var cordovaAppBoot = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {

        if (device.platform === 'Win32NT') {
            StatusBar.hide();
        };

        angular.bootstrap(document.getElementById('appScope'), ["sushiApp"]);

        var kendoApp = new kendo.mobile.Application(document.body, {
            transition: 'slide',
            skin: 'flat'
        });

    }
};
