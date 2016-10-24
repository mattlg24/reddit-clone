const app = angular.module('redditCloneApp', [])

app.controller('MainController', ['$scope', function($scope) {

    $scope.posts = []
    $scope.post = {}

    $scope.submitPostForm = function(post) {
        event.preventDefault()
        console.log('post info', post);
        $scope.posts.push($scope.post)
        $scope.post = ''
    }

    $scope.votes = '0'
    $scope.downVote = function() {
        console.log('I was voted down');
        $scope.votes--
    }

    $scope.upVote = function() {
        console.log('I was voted up');
        $scope.votes++
    }
}])
