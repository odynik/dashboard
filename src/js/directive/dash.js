//Directive for reading the dataset file in order to import the data in the $scope variables.
angular.module('angular_hw')
  .directive('fileReader', function () {
    return {
      scope: {
        fileReader: "="
      },
      link: function (scope, element) {
        element.on('change', function (changeEvent) {
          var files = changeEvent.target.files;
          if (files.length) {
            var r = new FileReader();
            r.onload = function (e) {
              var contents = e.target.result;
              scope.$apply(function () {
                scope.fileReader = contents;
              });
            };
            r.readAsText(files[0]);
          }
        });
      }
    };
  });

  //Directive for creating a d3 chart.
angular.module('angular_hw')
  .directive('aChart', ['d3Factory', function (d3) {
    return {
      restrict: 'EA',
      replace: false,
      template: "<svg width='850' height='200'></svg>",
      link: function (scope, element, attrs) {
        console.log("Directive data!!!");
        console.log(scope[attrs.chartData]);
        console.log(d3);
        // Place your d3 chart code here
      }
    };
  }]);