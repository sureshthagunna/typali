"use strict";
(function () {

	angular
	.module('typali')
	  .service('datafetchService', DatafetchService);

	DatafetchService.$inject = ['$http'];

	function DatafetchService ($http) {
		var service = this;

		// var url = "https://typali.herokuapp.com/api/";
		var url = "http://localhost:8080/api/";

		/*get string*/
		service.getString = function (params) {
			var response = $http({
				cache: true,
				method: 'GET',
				url: url+"getstring/"+params
			});

			console.log("url : ",url+"getstring/"+params);

			return response;
		};



	}

})();
