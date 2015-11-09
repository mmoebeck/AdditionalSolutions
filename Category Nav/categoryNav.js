angular.module('OrderCloud-CategoryNav', []);

angular.module('OrderCloud-CategoryNav')
    .directive('categorynav', categorynav)
    .controller('CatNavCtrl', CatNavCtrl)
;

function categorynav() {
    var directive = {
        restrict: 'E',
        tree: '=',
        template: template,
        controller: CatNavCtrl
    };
    return directive;

    function template() {
        return [
            '<header class="header navbar navbar-inner">',
                '<nav class="navbar navbar-default catnav" role="navigation">',
                    '<section>',
                        '<div class="container">',
                            '<ul class="navbar-nav catnav-nav pull-left">',
                                '<li ng-repeat="t in tree" ng-class="{\'active\': isInPath(\'{{t.InteropID}}\'),\'dropdown\': t.SubCategories.length > 0}">  ',
                                    '<a ng-if="t.SubCategories.length > 0" href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="false">{{t.Name}}<b class="caret"></b></a>',
                                    '<a ng-if="t.SubCategories.length == 0" href="catalog/{{t.InteropID}}">{{t.Name}}</a>',
                                    '<ul ng-if="t.SubCategories.length > 0" class="dropdown-menu">',
                                        '<li><a href="catalog/{{t.InteropID}}">All {{t.Name}}</a></li>',
                                        '<li ng-repeat="sc in t.SubCategories"><a href="catalog/{{sc.InteropID}}">{{sc.Name}}</a></li>',
                                    '</ul>',
                                '</li>',
                            '</ul>',
                        '</div>',
                    '</section>',
                '</nav>',
            '</header>'
        ].join('');
    }
}

CatNavCtrl.$inject = ['$scope','$location'];
function CatNavCtrl($scope,$location) {
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
}