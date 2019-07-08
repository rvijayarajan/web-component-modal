(function () {

 	var app = angular.module("main",['wcModal','component']);

	app.component("app", {
		template: '<a ng-click="openModal()" href="#">Click Me !</a>',
		bindings: {
			
		},
		controller: "AppController"
	});

	app.controller("AppController", AppControllerFn);

	AppControllerFn.$inject = ["$scope", "wcModal"];

	function AppControllerFn($scope, wcModal) {

		$scope.openModal = function() {
			wcModal.showModal({
				component: 'component'
			});
		};
		
	}

})();
