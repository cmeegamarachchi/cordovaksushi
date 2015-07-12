(function (app) {

    function indexController(sushiCartService) {
        var self = this;

        self.sushiCart = sushiCartService;
    }

    app.controller('indexController', ['sushiCartService', indexController]);

})(angular.module('sushiApp'));