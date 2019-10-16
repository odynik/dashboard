angular.module('angular_hw')
    .service('fileUpload', ['$http', function ($http) {
        this.uploadFileToUrl = function(file, uploadUrl) {
           var fd = new FormData();
           fd.append('file', file);
        
           $http.post(uploadUrl, fd, {
              transformRequest: angular.identity,
              headers: {'Content-Type': undefined}
           }).then(function successCallback(response) {
                console.log('Succesfully uploaded....!!!' );
            }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log('Error! The files was not uploaded!' );
            });
        }   
     }]);