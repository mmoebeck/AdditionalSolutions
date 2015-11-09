angular.module('OrderCloud-CategoryCollapse', []);

angular.module('OrderCloud-CategoryCollapse')
    .directive('categorycollapse', categorycollapse)
    .controller('CatCollCtrl', CatCollCtrl)
;

function categorycollapse() {
    var directive = {
        restrict: 'E',
        scope:{
            tree:'='
        },
        link: function($scope) {
            angular.forEach($scope.tree, function(t){
                if(t.SubCategories){
                    t.ShowCat = [];
                    angular.forEach(t.SubCategories,function(sc){
                        t.ShowCat.push(sc.InteropID);
                        if(sc.SubCategories){
                            sc.ShowCat = [];
                            angular.forEach(sc.SubCategories,function(sc2){
                                t.ShowCat.push(sc2.InteropID);
                                sc.ShowCat.push(sc2.InteropID);
                                if(sc2.SubCategories){
                                    angular.forEach(sc2.SubCategories,function(sc3){
                                        t.ShowCat.push(sc3.InteropID);
                                        sc.ShowCat.push(sc3.InteropID);
                                    });
                                }
                            });
                        }
                    });
                }
            });
        },
        template: template,
        controller: CatCollCtrl
    };
    return directive;

    function template() {
        return [
            '<ul>',
                '<li class="451_cat_item" ng-repeat="node in tree" ng-class="{\'active\': isInPath(node.Name)}">',
                    '<a ng-href="catalog/{{node.InteropID}}" ng-bind-html="node.Name"></a>',
                    '<ul ng-if="node.SubCategories" ng-show="isInPath(node.Name) || subInPath(node.ShowCat)">',
                        '<li class="451_cat_item" ng-repeat="subCat in node.SubCategories">',
                            '<a ng-class="{\'active\': subInPath(node.ShowCat)}" ng-href="catalog/{{subCat.InteropID}}" ng-bind-html="subCat.Name"></a>',
                            '<ul ng-if="subCat.SubCategories" ng-show="isInPath(subCat.Name) || subInPath(subCat.ShowCat)">',
                                '<li class="451_cat_item" ng-repeat="subCatTwo in subCat.SubCategories">',
                                    '<a ng-class="{\'active\': subInPath(node.ShowCat)}" ng-href="catalog/{{subCatTwo.InteropID}}" ng-bind-html="subCatTwo.Name"></a>',
                                '</li>',
                            '</ul>',
                        '</li>',
                    '</ul>',
                '</li>',
            '</ul>'
        ].join('');
    }
}

CatCollCtrl.$inject = ['$scope', '$location'];
function CatCollCtrl($scope, $location) {
    $scope.isInPath = function(path) {
        var cur_path = $location.path().replace('/', '');
        var result = false;

        if(cur_path.indexOf(path) > -1) {
            result = true;
        }
        else {
            result = false;
        }
        return result;
    };
    $scope.subInPath = function(path) {
        var cur_path = $location.path().replace('/', '');
        var result = false;

        angular.forEach(path,function(p){
            if(cur_path.indexOf(p) > -1) {
                result = true;
            }
        });
        
        return result;
    };
    $scope.ShowSubCat = function(node){
        if(node.ShowCat){
            node.ShowSubCat = true;
        }
    }
}