angular
	.module('app')
	.directive('todoItem', todoItem);

function todoItem () {
  return {
    restrict: 'E',
    templateUrl: 'js/transactions/todoTemplate.html'
  }
}