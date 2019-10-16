angular.module('angular_hw')
    .service('fileUpload', ['$http', function ($http) {
        this.uploadFileToUrl = function(file, uploadUrl) {
           var fd = new FormData();
           fd.append('file', file);
        
           $http.post(uploadUrl, fd, {
              transformRequest: angular.identity,
              headers: {'Content-Type': undefined}
           })
           .success(function() {
            console.log('Succesfully uploaded....!!!' );
           })
           .error(function() {
            console.log('Error! The files was not uploaded!' );
           });
        }
     }]);