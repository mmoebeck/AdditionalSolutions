angular.module('OrderCloud-MODULENAME', []);

angular.module('OrderCloud-MODULENAME')
    .directive('directivename', directivename)
    .controller('ModuleCtrl', ModuleCtrl)
;

function directivename() {
    var directive = {
        restrict: 'E',
        scope:{
            custom:'='
        },
        link: function($scope) {
            angular.forEach($scope.custom, function(c){
                //placeholder
            });
        },
        template: template,
        controller: ModuleCtrl
    };
    return directive;

    function template() {
        return [
            '<div>',
                '<input type="text" ng-model="moduleTest" />',
            '</div>'
        ].join('');
    }
}

ModuleCtrl.$inject = ['$scope', 'ServiceName'];
function ModuleCtrl($scope, ServiceName) {
    $scope.moduleTest = "Hello World!";

    ServiceName.method();
}