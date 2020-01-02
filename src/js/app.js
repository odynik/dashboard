// Main AngularJS application with the ngrout and d3 dependencies.
var app = angular.module("ddash", ["ngRoute", "d3", "ngMaterial", "ngMessages"])
    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/dash.html",
                controller: "DashCtrl"
            })                                                               
            .otherwise({                      
                template: "Template does not exist"   
            });
    }
]);