// profile.controller('loginController', function($scope, $http, $state, $sessionStorage, $rootScope) {

//     $http.get('json/user.json').then((response) => {
//         $rootScope.user = response;
//     });
//     $scope.logIn = () => {
//         for (let i = $rootScope.user.length - 1; i >= 0; i--) {
//             if ($scope.login == $rootScope.user[i].login && $scope.password == $rootScope.user[i].password) {
//                 $sessionStorage.user = $scope.login;
//                 $state.go('profile');
//                 return;
//             }
//         }
//         alert('error');
//     }
//     $scope.logginOnEnter = (e) => {
//         if (e.keyCode == 13) {
//             $scope.logIn();
//         }
//     }
// })
(function() {
    'use strict';

    angular
        .module('profile')
        .controller('loginController', loginController);

    loginController.inject = ['$firebaseArray', '$timeout', 'userFactory', '$state', '$sessionStorage'];

    function loginController($firebaseArray, $timeout, userFactory, $state, $sessionStorage) {
        var vm = this,
            users = firebase.database().ref().child("users");
        vm.users = $firebaseArray(users);
        vm.logIn = function() {
            users.orderByChild("auth").equalTo(vm.login + '_' + vm.password).on("child_added", function(snapshot) {
                $timeout(function() {

                    $sessionStorage.user = snapshot.val();
                    $state.go('profile');
                });
                // vm.res = snapshot.child("name");
            });
        }
    }
})();