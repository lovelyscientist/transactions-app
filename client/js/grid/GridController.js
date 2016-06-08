angular
    .module('myApp')
    .controller('GridController', GridController);

GridController.$inject = ['$scope', 'transactionsStore'];

function GridController ($scope, transactionsStore) { 

    $scope.config = {
      heads: ['date', 'amount', 'type']
    };

     $scope.config.data = transactionsStore.transactions;

    //setHeaders();

    function setHeaders () {
        let object = $scope.config.data[0],
            result = [];

        for (let header in object) {
            $scope.config.heads.push(header);
        }
    }
}