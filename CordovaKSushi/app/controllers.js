(function (app) {

    function indexController(sushiCartService) {
        var self = this;

        self.sushiCart = sushiCartService;

        self.filterFeatured = function () {
            self.sushiCart.productsDataSource.group([]);
            self.sushiCart.productsDataSource.filter({ field: "featured", operator: "eq", value: true });
        }
    }

    app.controller('indexController', ['sushiCartService', indexController]);


    function menuController(sushiCartService) {
        var self = this;

        self.sushiCart = sushiCartService;

        self.groupByCategory = function () {
            self.sushiCart.productsDataSource.filter([]);
            self.sushiCart.productsDataSource.group({ field: "category" });
        }
    }

    app.controller('menuController', ['sushiCartService', menuController]);

})(angular.module('sushiApp'));