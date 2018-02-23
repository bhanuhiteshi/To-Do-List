angular.module('toDoApp', [])
  .controller('toDoController', ['$scope', function ($scope, jq) {
    $scope.tasks = [];
    $scope.completed = [];
    $scope.newTaskName = '';
    $scope.add = function () {
      var name = $scope.newTaskName;
      if (name && $scope.tasks.indexOf(name) == -1 && $scope.completed.indexOf(name)) {
        $scope.tasks.push({
          title: name,
          selected: false,
        });
        $scope.newTaskName = '';
      }
    };
    $scope.remove = function (index) {
      if(index == undefined){
        if($scope.selectedAll){
          $scope.tasks = [];
          $scope.selectedAll = false;
        }
        else{
          var temp = []
          var inc = 0;
          $scope.tasks.map(function(value,i){         
            if(!value.selected){
              temp.push(value);
            }
          })
          $scope.tasks = temp;
        }
        
        
      }
      else{
        $scope.tasks.splice(index, 1);
      }
     
    }

    $scope.checkAll = function () {
      if ($scope.selectedAll) {
        $scope.selectedAll = true;
      } else {
        $scope.selectedAll = false;
      }
      angular.forEach($scope.tasks, function (task) {
        task.selected = $scope.selectedAll;
      });

    };
  }]);