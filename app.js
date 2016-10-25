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
        title: 'christmad',
        author: 'santa',
        imageUrl: 'http://www.wikihow.com/images/e/ee/Colored-Intro-7.jpg',
        description: 'hfui;aho; hfod;saij f;aj ofa jiof;joi;eafhe wao;i.',
        votes: 0,
        comments: []
    }]
    $scope.post = {}

    function createNewId() {
        let newId = $scope.posts.length
        return newId
    }

    $scope.commentForm = {};

    $scope.submitPostForm = function() {
        event.preventDefault()
            // console.log('post info', post);
        $scope.post.id = createNewId()
        $scope.post.votes = 0
        $scope.post.downVote = function() {
            this.votes -= 1
        }
        $scope.post.upVote = function() {
            // console.log(this);
            this.votes += 1
        }
        $scope.posts.push($scope.post)
        $scope.post = ''
        this.date = Date.now()
        $scope.comments = 3
    }

    $scope.submitCommentForm = function(post) {
        console.log('postid', post.id);
        let id = post.id
            // var id = //somehow pull the post id,this will be equal to the index of the posts array
            // event.preventDefault()
        var newComment = angular.copy($scope.commentForm)
        console.log('newComment is', newComment);
        $scope.posts[id].comments.push(newComment)
            // $scope.posts.comments = null
    }

}])
