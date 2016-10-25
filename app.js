const app = angular.module('redditCloneApp', [])

app.controller('MainController', ['$scope', '$log', function($scope, $log) {

    $scope.posts = [{
        id: 0,
        title: 'Halloween',
        author: 'Dracula',
        imageUrl: 'http://www.wikihow.com/images/e/ee/Colored-Intro-7.jpg',
        description: 'Spooky Scary Creepy Crawly. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        votes: 0,
        comments: []
    }, {
        id: 1,
        title: 'Christmas',
        author: 'Santa',
        imageUrl: 'http://coloringkids.org/wp-content/uploads/santa-cartoon.jpg',
        description: 'I like to bring presents to everyone because I\'m a jolly good fellow.',
        votes: 0,
        comments: []
    }]

    $scope.post = {}
    $scope.commentForm = {};
    $scope.post.comments = []

    function createNewId() {
        let newId = $scope.posts.length
            // console.log('newid is', newId);
        return newId
    }

    $scope.downVote = function(post) {
        post.votes -= 1
    }
    $scope.upVote = function(post) {
        // console.log('post', post);
        post.votes += 1
    }

    $scope.submitPostForm = function() {
        event.preventDefault()
            // console.log('post info', post);
        $scope.post.id = createNewId()
        $scope.post.votes = 0
        $scope.posts.push($scope.post)
        $scope.post = ''
        $scope.postForm.$setPristine()
        this.date = Date.now()
        $scope.comments = 2
    }

    $scope.submitCommentForm = function(post) {
        // console.log('post is', post);
        // $log.info('all posts...............', $scope.posts)
        event.preventDefault()
            // console.log('postid', post.id);
        let id = post.id
        var newComment = angular.copy($scope.commentForm)
            // console.log('newComment is', newComment);
        $scope.posts[id].comments.push(newComment)
        post.showCommentForm = false
    }

}])
