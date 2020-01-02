// The main controller of the dashboard
angular.module("ddash")
    .controller("DashCtrl", ["$scope", function($scope) {
            console.log("Dash Ctrl.");
            $scope.message = "Hello S2Hack4Energy Dashboard!";
        }
]);

angular.module("ddash")
  .controller("AppCtrl", function($scope, $mdSidenav) {
      $scope.toggleLeft = buildToggler("left");
      console.log("App Ctrl.");
      
      function buildToggler(componentId) {
          return function() {
              $mdSidenav(componentId).toggle();
              console.log("Doinkkk...!!!");
            };
        }
    });