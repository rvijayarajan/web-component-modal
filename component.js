(function () {

 	var app = angular.module("component",[]);

	app.component("component", {
		template: '<p>Hello World</p>',
		bindings: {
			
		},
		controller: "CmpController"
	});

	app.controller("CmpController", CmpControllerFn);

	CmpControllerFn.$inject = ["$scope"];

	function CmpControllerFn($scope) {
		
	}

})();
