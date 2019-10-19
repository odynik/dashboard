angular.module('angular_hw')
    .controller('DashCtrl', ['$scope', function($scope) {
            console.log('Dash Ctrl.');
            $scope.message = 'Hello Dashboard!';
        }
]);

angular.module('angular_hw')
    .controller('chartCtrl', ['$scope', function($scope) {
            console.log('Chart Ctrl.');
            $scope.ChartLocation = 'Here'
            $scope.myData = [10,20,30,40,60];
        }
]);