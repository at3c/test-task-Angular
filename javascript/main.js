(function(){
  
  var model = {
  	arrayRows: [0, 1, 2, 3],
  	arrayColumns: [0, 1, 2, 3]
  };

  var tableModule = angular.module('Table', []);

  tableModule.controller('contentCtrl', function ($scope, $timeout) {
    $scope.list = model;
    $scope.flagTop = false;
    $scope.flagLeft = false;

    var moveLength = 52;
    var indexColumn = 0;
    var indexRow = 0;
    var timeOutTop;
    var timeOutLeft;

    $scope.addRow = function(){
    	$scope.list.arrayRows.push($scope.list.arrayRows.length);
    };

    $scope.addColumn = function(){
    	$scope.list.arrayColumns.push($scope.list.arrayColumns.length);
    };

    $scope.deleteColumn = function(){
      $scope.list.arrayColumns.splice(indexColumn, 1);
      hideTop();
      
      for(var i in $scope.list.arrayColumns){        
        $scope.list.arrayColumns[i] = +i;
      }
    };

    $scope.deleteRow = function(){
      $scope.list.arrayRows.splice(indexRow, 1);
      hideLeft();

      for(var i in $scope.list.arrayRows){        
        $scope.list.arrayRows[i] = +i;
      }
    };

    $scope.moveButtonsDelete = function(row, column){
    	showButtonsDelete();
    	$scope.lengthLeft = row*moveLength + 5;
    	$scope.lengthTop = column*moveLength + 5;
      indexColumn = column;
      indexRow = row;
    };
    
    $scope.hideButtonsDelete = function(){
      timeOutTop = $timeout(hideTop, 100);
      timeOutLeft = $timeout(hideLeft, 100);
    };

    $scope.stopTimeoutTop = function(){
      $timeout.cancel(timeOutTop);
    };

    $scope.stopTimeoutLeft = function(){
      $timeout.cancel(timeOutLeft);
    };

    function showButtonsDelete(){
      if ($scope.list.arrayRows.length > 1){
        $scope.flagLeft = true;
      }
      if($scope.list.arrayColumns.length > 1)
        $scope.flagTop = true;
    }

    function hideTop(){
      $scope.flagTop = false;
    }

    function hideLeft(){ 
      $scope.flagLeft = false;
    }
  });


})();