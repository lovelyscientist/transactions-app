angular
	.module('app')
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
		    .state('home', {
		      url: '/home',
		      template: '<h1>Hello</h1>'
			})
			.state('add-transaction', {
		      url: '/add-transaction'
			})
			.state('list-transactions', {
		      url: '/list-transactions',
		      template: '<div ng-app="myApp" style="margin-left:5px;margin-top:10px" ng-controller="GridController"><grid conf="config"></grid></div>'
			})
	});