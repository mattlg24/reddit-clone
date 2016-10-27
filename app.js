const app = angular.module('redditCloneApp', ['ngAnimate'])

app.controller('MainController', ['$scope', '$log', function($scope, $log) {

    $scope.view = {}

    $scope.view.posts = [{
        id: 0,
        title: 'Halloween',
        author: 'Dracula',
        imageUrl: 'http://www.wikihow.com/images/e/ee/Colored-Intro-7.jpg',
        description: 'Spooky Scary Creepy Crawly. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        votes: 1,
        date: new Date('October 22, 2016'),
        momentDate: moment().subtract(5, 'days').calendar(),
        comments: [{
            author: 'Ghost',
            text: 'You are scary'
        }]
    }, {
        id: 1,
        title: 'Christmas',
        author: 'Santa',
        imageUrl: 'http://coloringkids.org/wp-content/uploads/santa-cartoon.jpg',
        description: 'I like to bring presents to everyone because I\'m a jolly good fellow.',
        votes: 0,
        date: new Date('October 25, 2016'),
        momentDate: moment().subtract(1, 'day').calendar(),
        comments: [{
            author: 'Rudolph',
            text: 'I don\'t want to pull the sleigh anymore'
        }, {
            author: 'Blitzen',
            text: 'Rudolph is a ninkampoop'
        }, ]
    }, {
        id: 2,
        title: 'Thanksgiving',
        author: 'Tom the Turkey',
        imageUrl: 'http://www.clipartlord.com/wp-content/uploads/2015/01/turkey8.png',
        description: 'I LOVE a good Thanksgiving meal. The food is always so delicious. I mean the GRAVY, the gravy is out of this world!',
        votes: -2,
        date: new Date('October 24, 2016'),
        momentDate: moment().subtract(3, 'day').calendar(),
        comments: [{
            author: 'Santa',
            text: 'You busy for Thanksgiving? How about coming up to the North Pole to be my guest of honor?'
        }, {
            author: 'Dracula',
            text: 'Dibs eating Tom... I mean eating dinner with Tom'
        }]
    }]

    $scope.post = {}
    $scope.commentForm = {};

    function createNewId() {
        let newId = $scope.view.posts.length
            // console.log('newid is', newId);
        return newId
    }

    $scope.downVote = function(post) {
        post.votes--
    }
    $scope.upVote = function(post) {
        // console.log('post', post);
        post.votes++
    }

    $scope.submitPostForm = function() {
        event.preventDefault()
            // console.log('post info', post);
        $scope.post.id = createNewId()
        $scope.post.votes = 0
        $scope.post.date = new Date()
        $scope.post.momentDate = moment().calendar()
        $scope.post.comments = []
        $scope.view.posts.push($scope.post)
        $scope.post = ''
        $scope.postForm.$setPristine()
    }



    $scope.submitCommentForm = function(post) {
        console.log('post is', post);
        // $log.info('all posts...............', $scope.posts)
        event.preventDefault()
            // console.log('postid', post.id);
        let id = post.id
        var newComment = angular.copy(post.commentForm)
            // console.log('newComment is', newComment);
        $scope.view.posts[id].comments.push(newComment)
        post.commentForm = {}
        post.showCommentForm = false
        this.commentSection = true
    }

    $scope.orderVal = '-votes'

}])
