angular.module('angular_hw')
    .controller('DashCtrl', ['$scope', function($scope) {
            console.log('Dash Loaded.');
            $scope.message = 'Hello Dashboard!';
        }
]);