four51.app.directive('copyright', function() {
    var obj = {
        restrict: 'E',
        templateUrl: 'partials/categoryList.html',
        controller: ['$scope', function($scope) {
            var d = new Date();
            $scope.year = d.getFullYear();
        }]
    }
    return obj;
});