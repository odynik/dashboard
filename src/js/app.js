// Main AngularJS application with the ngrout and d3 dependencies.
angular.module('angular_hw', ['ngRoute', 'd3'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/dash.html',
                controller: 'DashCtrl'
            })                                                               
            .otherwise({                      
                template: 'Template does not exists'   
            });
    }
]);