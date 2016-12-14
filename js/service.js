var array = [1, 20000, 4000]


angular.module('app1').service('service', function($http) {

  this.array = array;


  this.find = finder(this.array);

  function finder(array ) {
    var largest = array[0];
    for (var i = 0; i < array.length; i++) {
      if (array[i] > largest) {
        largest = array[i];
      }
    }
      return largest
  }










})
