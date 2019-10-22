// The main controller of the dashboard
angular.module('angular_hw')
    .controller('DashCtrl', ['$scope', function($scope) {
            console.log('Dash Ctrl.');
            $scope.message = 'Hello S2Hack4Energy Dashboard!';
        }
]);

//The chart controller. my 
angular.module('angular_hw')
    .controller('chartCtrl', ['$scope', function($scope) {
            console.log('Chart Ctrl.');
            //Sample variables and data for the d3 chart.
            $scope.ChartLocation = 'Here'
            $scope.myData = [
                {year: 2010, sales: 54},
                {year: 2011, sales: 66},
                {year: 2012, sales: 77},
                {year: 2013, sales: 70},
                {year: 2014, sales: 60},
                {year: 2015, sales: 63},
                {year: 2016, sales: 55},
                {year: 2017, sales: 47},
                {year: 2018, sales: 55},
                {year: 2019, sales: 30}
            ];
        }
]);