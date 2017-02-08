(function() {
    'use strict';

    angular
        .module('profile')
        .factory('userFactory', userFactory);

    userFactory.inject = [''];

    function userFactory() {
        var service = {
            exposedFn: exposedFn
        };

        return service;

        ////////////////
        function exposedFn() {}
    }
})();