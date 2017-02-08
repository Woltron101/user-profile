// profile.controller('profileController', ($scope, $http, $state, $sessionStorage, userFactory) => {

//     // userFactory
//     console.log("userFactory ", userFactory);

//     $scope.showPopup = function() {
//         let clickedElId = this.item.id,
//             catalog = $scope.catalog;

//         for (let i = catalog.length - 1; i >= 0; i--) {
//             if (catalog[i].id == clickedElId) {
//                 $scope.popup = catalog[i];
//                 $scope.popup.active = true;
//             }
//         }
//     }

//     $scope.hidePopup = (e) => {
//         let target = angular.element(e.target);

//         if (target.hasClass('popup-wrap') || target.hasClass('close')) {
//             $scope.popup.active = false;
//         }
//     }

//     $scope.logOut = () => {
//         delete $sessionStorage.user;
//         $state.go('login');
//     }
// })
(function() {
    'use strict';

    angular
        .module('profile')
        .controller('profileController', profileController);

    profileController.inject = ['userFactory', '$sessionStorage'];

    function profileController(userFactory, $sessionStorage) {
        var vm = this;
        vm.user = $sessionStorage.user
        console.log("vm.user ", vm.user);
        console.log("$sessionStorage.user ", $sessionStorage.user);

    }
})();