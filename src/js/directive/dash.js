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

angular.module('angular_hw')
  .directive('barsChart',[ 'd3', function(d3) {
    return {
         restrict: 'EA',
         replace: false,
         scope: {data: '=chartData'},
         template: "<h1>Made by a directive!</h1>",
         link: function(scope, element, attr){
            console.log("Directive data!!!");
            console.log(scope.data);
            // var chart = d3.select(element[0]);
            // chart.append("div").attr("class", "chart")
            // .selectAll('div')
            // .data(scope.data).enter().append("div")
            // .transition().ease("elastic")
            // .style("width", function(d) { return d + "%"; })
            // .text(function(d) { return d + "%"; });
            }
      };
}]);