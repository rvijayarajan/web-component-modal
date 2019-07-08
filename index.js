(function () {

 	var app = angular.module("wcModal",["ui.bootstrap","ngAnimate","ngSanitize"]);

	app.factory("wcModal", wcModalFactory);

	wcModalFactory.$inject = ['$uibModal']

	function wcModalFactory($uibModal) {
		
		function showModal(modalOptions) {
			return $uibModal.open(modalOptions);
		}

		return {
			showModal: showModal
		}
	}

})();
