const app = angular.module('redditCloneApp', [])

app.controller('MainController', ['$scope', function($scope) {

    $scope.posts = []
    $scope.posts = {}

    $scope.submitPostForm = function() {
        event.preventDefault()


    }
}])
