angular.module('OrderCloud-CartViewCoupon', []);

angular.module('OrderCloud-CartViewCoupon')
    .directive('cartviewcoupon', cartviewcoupon)
    .controller('CartViewCouponCtrl', CartViewCouponCtrl)
;

function cartviewcoupon() {
    var directive = {
        restrict: 'E',
        template: template,
        controller: CartViewCouponCtrl
    };
    return directive;

    function template() {
        return [
            '<div ng-show="user.Permissions.contains(\'ViewPromotions\')">',
                '<div ng-show="!currentOrder.Coupon">',
                    '<div class="form-group view-form-icon">',
                        '<div>',
                            '<label ng-show="currentOrder.CouponCode">{{(\'Coupon\' | r) + \' \' + (\'Code\' | r) | xlat}}</label>',
                            '<div class="input-group">',
                                '<input class="form-control" type="text" ng-model="currentOrder.CouponCode" placeholder="{{(\'Coupon\' | r) + \' \' + (\'Code\' | r) | xlat}}" autocomplete="off"/>',
                                '<span class="input-group-btn">',
                                    '<button type="button" class="btn btn-success" ng-click="applyCoupon()"><i class="fa fa-check"></i></button>',
                                '</span>',
                            '</div>',
                            '<i class="fa fa-question-circle"></i>',
                        '</div>',
                    '</div>',
                '</div>',
                '<p ng-show="currentOrder.Coupon">',
                    '<span class="text-info">{{currentOrder.Coupon.Label}}:</span>{{currentOrder.Coupon.OrderDiscount * -1 | culturecurrency}}<br/>',
                '</p>',
                '<div ng-show="currentOrder.Coupon">',
                    '<button type="button"  class="btn btn-danger pull-right" ng-click="removeCoupon()">Remove {{\'Coupon\' | r | xlat}}</button>',
                    '<p class="text-left" ng-show="currentOrder.Coupon.ExpirationDate"><small class="text-danger">{{\'Expires\' | r | xlat}}: {{currentOrder.Coupon.ExpirationDate | date:user.Culture.DateFormat.short}}</small></p>',
                '</div>',
            '</div>'
        ].join('');
    }
}

CartViewCouponCtrl.$inject = ['$scope', 'Order', 'Coupon'];
function CartViewCouponCtrl($scope, Order, Coupon) {
    var save = function(callback) {
        Order.save($scope.currentOrder,
            function(data) {
                $scope.currentOrder = data;
                if (callback) callback($scope.currentOrder);
            }
        );
    };

    $scope.applyCoupon = function() {
        $scope.couponLoadingIndicator = true;
        $scope.couponError = null;
        Coupon.apply($scope.currentOrder.CouponCode,
            function(coupon) {
                $scope.currentOrder.Coupon = coupon;
                save(function() {
                    $scope.couponLoadingIndicator = false;
                });
            },
            function(ex) {
                $scope.couponError = ex.Message;
                $scope.couponLoadingIndicator = false;
            }
        );
    };

    $scope.removeCoupon = function() {
        $scope.couponError = null;
        $scope.couponRemoveIndicator = true;
        Coupon.remove(function() {
            save(function() {
                $scope.couponRemoveIndicator = false;
            });
        });
    };
}