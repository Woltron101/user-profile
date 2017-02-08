(function() {
    'use strict';

    angular
        .module('profile')
        .controller('editController', editController);

    editController.inject = ['$sessionStorage'];

    function editController($sessionStorage) {
        var vm = this;
        vm.user = $sessionStorage.user
        vm.save = function() {

        }
    }
})();