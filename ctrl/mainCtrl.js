;
(function() {
    'use strict';

    angular
        .module('profile')
        .controller('mainController', mainController);

    mainController.inject = ['$firebaseArray', '$document', '$timeout'];

    function mainController($firebaseArray, $document, $timeout) {
        var vm = this;

        // var users = firebase.database().ref().child("users");
        // vm.users = $firebaseArray(users);
        // users.orderByChild("auth").equalTo('login1_password1').on("child_added", function(snapshot) {
        //     $timeout(function() {
        //         vm.res = snapshot.val();
        //     });
        //     // vm.res = snapshot.child("name");
        // });
        // // var ref = firebase.database().ref("dinosaurs");

        // vm.addMessage = function() {
        //     vm.users.$add({
        //         "photo": "http://lorempixel.com/300/300/people",
        //         "login": "login2",
        //         "password": "password2",
        //         "auth": "login2_password2",
        //         "name": "Rasmussen",
        //         "surname": "Mueller",
        //         "age": 28,
        //         "gender": "male",
        //         "company": "KENEGY",
        //         "email": "rasmussenmueller@kenegy.com",
        //         "phone": "+1 (888) 403-2917",
        //         "about": "Culpa esse aute cillum incididunt proident proident. Eiusmod quis incididunt est laboris voluptate nulla et voluptate. Sint minim consequat sit tempor non cupidatat excepteur labore minim minim exercitation. Laboris ea nostrud consequat reprehenderit cupidatat non tempor exercitation culpa. Anim consectetur fugiat labore enim deserunt non nostrud pariatur reprehenderit incididunt consequat ex aliqua tempor. Sint do nulla exercitation amet ea est aute labore ex commodo. Sit officia proident minim consequat adipisicing mollit cillum nulla.\r\n"
        //     });
        // };




    }
})();