define([
    '{angular}/angular',
    'moment-modern',
    'moment-legacy',
    '{angular-resource}/angular-resource',
    '{angular-daterangepicker}/angular-daterangepicker',
    "[css]!{bootstrap-daterangepicker}/daterangepicker.css",
], function(angular, momentModern) {
    'use strict';

	var module = angular.module('content', ['ngResource','daterangepicker']);

   

	module.controller('ContentController', [ '$scope', '$timeout',  function($scope) {
        $scope.datePicker = {
            date:{
                startDate: null, 
                endDate: null
            }
        };
        $scope.momentModernVersion = momentModern.version;
        $scope.momentLegacyVersion = moment.version;
  
              
    }]);
    

	return {
		angularModules : [ 'content' ]
	};
});
