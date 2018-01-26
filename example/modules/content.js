define([
    '{angular}/angular',
    '{angular-resource}/angular-resource',
    '{angular-daterangepicker}/angular-daterangepicker',
    "[css]!{bootstrap-daterangepicker}/daterangepicker.css"
], function(angular) {
    'use strict';

	var module = angular.module('content', ['ngResource','daterangepicker']);

   

	module.controller('ContentController', [ '$scope', '$timeout',  function($scope) {
        $scope.datePicker = {
            date:{
                startDate: null, 
                endDate: null
            }
        };
  
              
    }]);
    

	return {
		angularModules : [ 'content' ]
	};
});
