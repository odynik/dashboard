angular.module('angular_hw')
    .controller('DashCtrl', ['$scope', function($scope) {
            console.log('Dash Loaded.');
            $scope.message = 'Hello World!!!';
        }
]);

angular.module('angular_hw')
    .controller('FileUploadCtrl', ['$scope', 'fileUpload', function($scope, fileUpload){
        $scope.uploadFile = function() {

            var file = $scope.myFile;
            console.log('FileUploadCtrl: File is ', file );
            console.dir(file);
            var uploadUrl = "/fileUpload";
            fileUpload.uploadFileToUrl(file, uploadUrl);
        };
    }
]);