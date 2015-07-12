(function(angular) {

    var app = angular.module('sushiApp', ['kendo.directives']);

    function initService(sushiCartService) {
        sushiCartService.init();
    }

    app.run(['sushiCartService', initService]);

})(angular);