(function(angular) {

    var app = angular.module('sushiApp', ['kendo.directives']);

    app.config([
        '$compileProvider',
        function ($compileProvider) {
            $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|http|local|ftp|mailto|chrome-extension):/);
        }
    ]);

    function initService(sushiCartService) {
        sushiCartService.init();
    }

    app.run(['sushiCartService', initService]);

})(angular);