(function(){
	angular
		.module('layout-controller', [])
    .animation('.animate', [function(){
      return {
        enter: function(element, doneFn) {
          //jQuery(element).fadeOut(1000, doneFn());
          //jQuery(element).fadeIn(1000, doneFn());
        }
      }
    }])
		.controller('LayoutController', ['$scope', 'Global', function($scope, Global){
      this.elems = arr;
   
		}]);

    var arr = [
      {
        name: "1st element",
        filter: "red"
      },
      {
        name: "2nd element",
        filter: "green"
      },
      {
        name: "3rd element",
        filter: "red"
      },
      {
        name: "4th element",
        filter: "green"
      },
      {
        name: "5th element",
        filter: "red"
      },
      {
        name: "6th element",
        filter: "red"
      },
      {
        name: "7th element",
        filter: "green"
      },
      {
        name: "8th element",
        filter: "green"
      },
      {
        name: "9th element",
        filter: "green"
      },
      {
        name: "10th element",
        filter: "red"
      },
      {
        name: "11th element",
        filter: "red"
      },
      {
        name: "12th element",
        filter: "red"
      },
      {
        name: "13th element",
        filter: "red"
      },
      {
        name: "14th element",
        filter: "green"
      }
    ];
})();