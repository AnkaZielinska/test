var app = angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);
app.controller('ModalController', function ($scope, $uibModal, $log) {

    $scope.animationsEnabled = true;

    $scope.open = function (size) {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'modalShowAboutUser.html',
            controller: 'ModalInstanceControler',
            size: size,
            resolve: {}
            }
        );

        //modalInstance.result.then(function (selectedItem) {
        //    $scope.selected = selectedItem;
        //}, function () {
        //    $log.info('Modal dismissed at: ' + new Date());
        //});
    };

    $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };

});

app.controller('ModalInstanceControler', function ($scope, $uibModalInstance) {

    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});

