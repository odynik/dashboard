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
  .directive('barsChart', ['d3Factory', function (d3) {
    return {
      restrict: 'EA',
      replace: false,
      // scope: { data: '=chartData' },
      template: "<svg width='850' height='200'></svg>",
      link: function (scope, element, attrs) {
        console.log("Directive data!!!");
        console.log(scope[attrs.chartData]);
        console.log(d3);

        var salesDataToPlot = scope[attrs.chartData];
        var padding = 20;
        var pathClass = "path";
        var xScale, yScale, xAxisGen, yAxisGen, lineFun;
        var rawSvg = element.find('svg');
        var svg = d3.select(rawSvg[0]);

        function setChartParameters() {

          xScale = d3.scaleLinear()
            .domain([salesDataToPlot[0].hour, salesDataToPlot[salesDataToPlot.length - 1].hour])
            .range([padding + 5, rawSvg.attr("width") - padding]);

          yScale = d3.scaleLinear()
            .domain([0, d3.max(salesDataToPlot, function (d) {
              return d.sales;
            })])
            .range([rawSvg.attr("height") - padding, 0]);

          xAxisGen = d3.axisBottom(xScale);

          yAxisGen = d3.axisLeft(yScale);

          lineFun = d3.line()
            .x(function (d) {
              return xScale(d.hour);
            })
            .y(function (d) {
              return yScale(d.sales);
            })
        }

        function drawLineChart() {

          setChartParameters();

          svg.append("svg:g")
            .attr("class", "x axis")
            .attr("transform", "translate(0,180)")
            .call(xAxisGen);

          svg.append("svg:g")
            .attr("class", "y axis")
            .attr("transform", "translate(20,0)")
            .call(yAxisGen);

          svg.append("svg:path")
            .attr({
              d: lineFun(salesDataToPlot),
              "stroke": "blue",
              "stroke-width": 2,
              "fill": "none",
              "class": pathClass
            });
        }

        drawLineChart();
      }
    };
  }]);