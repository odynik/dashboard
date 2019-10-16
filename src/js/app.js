angular.module('angular_hw', ['ngRoute'])
    .config(['$routeProvider',function($routeProvider) {
            $routeProvider
            .when('/', {
                templateUrl: 'views/dash.html',
                controller: 'DashCtrl'
            });
        }
    ]);