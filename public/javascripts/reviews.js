'use strict';
/**
 * @ngdoc function
 * @name aromeo.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the Agileromeo app
 */
 var app = angular.module('tango',[]);
 // angular.module('tango',[])
 app.factory('Review', function($http){
   return {
    get : function() {
      return $http.get('/api/reviews');
    },

    searchById : function(id) {
      return $http.get('/api/reviews/' + id);
    },

    
  }
});


  // angular.module('tango',[])
  app.controller('reviewsCtrl', function($scope,$http){
  
  $scope.formData = {};

        // when landing on the page, get all todos and show them
        $http.get('/api/reviews')
                .success(function(data) {
                        $scope.users = data;
                })
                .error(function(data) {
                        console.log('Error: ' + data);
                });

        $scope.searchById = function(userid) {
          $http.get('/api/reviews/' + userid)
                  .success(function(data) {
                          $scope.user = data;
                  })
                  .error(function(data) {
                          console.log('Error: ' + data);
                  });
        };

        

});