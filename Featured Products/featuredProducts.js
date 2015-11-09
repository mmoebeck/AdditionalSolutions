angular.module('OrderCloud-FeaturedProducts', []);

angular.module('OrderCloud-FeaturedProducts')
    .directive('featuredproducts', featuredproducts)
    .controller('FeatProdCtrl', FeatProdCtrl)
;

function featuredproducts() {
    var directive = {
        restrict: 'E',
        template: template,
        controller: FeatProdCtrl
    };
    return directive;

    function template() {
        return [
            '<h3>Featured Products</h3>',
            '<div class="row">',
                '<div class="col-md-3" ng-repeat="FeaturedProduct in featProducts">',
                    '<div class="well featured-well">',
                        '<div class="451qa_prod_item row">',
                            '<div class="col-xs-12 text-center">',
                                '<a class="thumbnail" href="product/{{FeaturedProduct.InteropID}}">',
                                    '<figure ng-show="FeaturedProduct.Variant.SmallImageUrl || FeaturedProduct.SmallImageUrl" >',
                                        '<img class="featured-image" ng-src="{{FeaturedProduct.Variant.SmallImageUrl || FeaturedProduct.SmallImageUrl}}"/>',
                                    '</figure>',
                                    '<div class="empty" ng-hide="FeaturedProduct.Variant.SmallImageUrl || FeaturedProduct.SmallImageUrl">',
                                        '<span class="fa empty"><i class="fa fa-camera"></i></span>',
                                    '</div>',
                                '</a>',
                            '</div>',
                        '</div>',
                    '</div>',
                    '<div class="featured-name">',
                        '<div class="panel-body">',
                            '<h5 class="text-center">{{FeaturedProduct.Name}}</h5>',
                        '</div>',
                    '</div>',
                '</div>',
            '</div>'
        ].join('');
    }
}

FeatProdCtrl.$inject = ['$scope', 'Product'];
function FeatProdCtrl($scope, Product) {
    //holder for product objects
    $scope.featProducts = [];

    //list of up to 4 featured items.
    $scope.featuredList = [
        "PRODUCTAPIINTEROPID1",
        "PRODUCTAPIINTEROPID2",
        "PRODUCTAPIINTEROPID3",
        "PRODUCTAPIINTEROPID4"
    ];

    //loop through each featured item and use the Product service to return the needed object
    angular.forEach($scope.featuredList, function(f){
        Product.get(f, function(data){
            $scope.featProducts.push(data);
        });
    });
}