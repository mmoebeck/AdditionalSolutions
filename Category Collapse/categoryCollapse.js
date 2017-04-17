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
                                    sc2.ShowCat = [];
                                    angular.forEach(sc2.SubCategories,function(sc3){
                                        t.ShowCat.push(sc3.InteropID);
                                        sc.ShowCat.push(sc3.InteropID);
                                        sc2.ShowCat.push(sc3.InteropID);
                                        if(sc3.SubCategories){
                                            sc3.ShowCat = [];
                                            angular.forEach(sc3.SubCategories,function(sc4){
                                                t.ShowCat.push(sc4.InteropID);
                                                sc.ShowCat.push(sc4.InteropID);
                                                sc2.ShowCat.push(sc4.InteropID);
                                                sc3.ShowCat.push(sc4.InteropID);
                                                if(sc4.SubCategories){
                                                    sc4.ShowCat = [];
                                                    angular.forEach(sc4.SubCategories,function(sc5){
                                                        t.ShowCat.push(sc5.InteropID);
                                                        sc.ShowCat.push(sc5.InteropID);
                                                        sc2.ShowCat.push(sc5.InteropID);
                                                        sc3.ShowCat.push(sc5.InteropID);
                                                        sc4.ShowCat.push(sc5.InteropID);
                                                        if(sc5.SubCategories){
                                                            sc5.ShowCat = [];
                                                            angular.forEach(sc5.SubCategories,function(sc6){
                                                                t.ShowCat.push(sc6.InteropID);
                                                                sc.ShowCat.push(sc6.InteropID);
                                                                sc2.ShowCat.push(sc6.InteropID);
                                                                sc3.ShowCat.push(sc6.InteropID);
                                                                sc4.ShowCat.push(sc6.InteropID);
                                                                sc5.ShowCat.push(sc6.InteropID);
                                                            });
                                                        }
                                                    });
                                                }
                                            });
                                        }
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
                '<li class="451_cat_item top-level-list" ng-repeat="node in tree" ng-class="{\'active\': isInPath(node.InteropID)}">',
                    '<a class="top-level-cat" ng-href="catalog/{{node.InteropID}}" ng-bind-html="node.Name"></a>',
                    '<ul ng-if="node.SubCategories" ng-show="isInPath(node.InteropID) || subInPath(node.ShowCat)">',
                        '<li class="451_cat_item" ng-repeat="subCat in node.SubCategories">',
                            '<a ng-class="{\'active\': subInPath(node.ShowCat)}" ng-href="catalog/{{subCat.InteropID}}" ng-bind-html="subCat.Name"></a>',
                            '<ul ng-if="subCat.SubCategories" ng-show="isInPath(subCat.InteropID) || subInPath(subCat.ShowCat)">',
                                '<li class="451_cat_item" ng-repeat="subCatTwo in subCat.SubCategories">',
                                    '<a ng-class="{\'active\': subInPath(node.ShowCat)}" ng-href="catalog/{{subCatTwo.InteropID}}" ng-bind-html="subCatTwo.Name"></a>',
                                    '<ul ng-if="subCatTwo.SubCategories" ng-show="isInPath(subCatTwo.InteropID) || subInPath(subCatTwo.ShowCat)">',
                                        '<li class="451_cat_item" ng-repeat="subCatThree in subCatTwo.SubCategories">',
                                            '<a ng-class="{\'active\': subInPath(node.ShowCat)}" ng-href="catalog/{{subCatThree.InteropID}}" ng-bind-html="subCatThree.Name"></a>',
                                            '<ul ng-if="subCatThree.SubCategories" ng-show="isInPath(subCatThree.InteropID) || subInPath(subCatThree.ShowCat)">',
                                                '<li class="451_cat_item" ng-repeat="subCatFour in subCatThree.SubCategories">',
                                                    '<a ng-class="{\'active\': subInPath(node.ShowCat)}" ng-href="catalog/{{subCatFour.InteropID}}" ng-bind-html="subCatFour.Name"></a>',
                                                    '<ul ng-if="subCatFour.SubCategories" ng-show="isInPath(subCatFour.InteropID) || subInPath(subCatFour.ShowCat)">',
                                                        '<li class="451_cat_item" ng-repeat="subCatFive in subCatFour.SubCategories">',
                                                            '<a ng-class="{\'active\': subInPath(node.ShowCat)}" ng-href="catalog/{{subCatFive.InteropID}}" ng-bind-html="subCatFive.Name"></a>',
                                                        '</li>',
                                                    '</ul>',
                                                '</li>',
                                            '</ul>',
                                        '</li>',
                                    '</ul>',
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
            if(cur_path.match(p)) {
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
