angular.module('app1').controller('controller', function($scope, service) {

    $scope.num = service.array;

    $scope.findLargestNumber = function() {
      $scope.largest = service.find
      console.log($scope.largest);

    }

})
