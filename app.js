(function () {

 	var app = angular.module("main",['wcModal']);

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
				animation: true,
				ariaLabelledBy: 'modal-title',
				ariaDescribedBy: 'modal-body',
				template: "<h3 class='modal-title' id='modal-title'>I'm a modal!</h3>"
			});
		};
		
	}

})();
