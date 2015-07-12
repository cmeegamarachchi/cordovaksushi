(function (app) {

    function sushiCartService() {
        var self = this;

        function init () {
            self.productsDataSource = new kendo.data.DataSource({ data: localData.menu });

            self.added = new kendo.data.ObservableArray([]);
            self.currentItem = null;
        };

        self.init = init;
    }

    app.service('sushiCartService', [sushiCartService]);

})(angular.module('sushiApp'));