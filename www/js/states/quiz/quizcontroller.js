var app = angular.module('quiz.controller', []);
var quizController = function($scope, $state){
	var _this = this;

	this.quizQuestion = {};

	this.cityData = [
    	{"firstName":"John", "imgUrl":"img/ionic.png"},
    	{"firstName":"John", "imgUrl":"img/ionic.png"},
    	{"firstName":"John", "imgUrl":"img/ionic.png"},
		{"firstName":"John", "imgUrl":"img/ionic.png"},
		{"firstName":"John", "imgUrl":"img/ionic.png"},
		{"firstName":"John", "imgUrl":"img/ionic.png"},
		{"firstName":"John", "imgUrl":"img/ionic.png"},
		{"firstName":"John", "imgUrl":"img/ionic.png"},
		{"firstName":"John", "imgUrl":"img/ionic.png"},
		{"firstName":"John", "imgUrl":"img/ionic.png"},
		{"firstName":"John", "imgUrl":"img/ionic.png"},
		{"firstName":"John", "imgUrl":"img/ionic.png"},
	];


	this.quizMaker = function(){
		var min = 0;
		var max = 10;
		var numb = Math.floor(Math.random() * (max - min + 1) + min);
		console.log(numb);
		return _this.cityData[numb];
	}


	this.quizQuestion = this.quizMaker();
	console.log(this.quizQuestion);
}


quizController.$inject = ['$scope', '$state'];
app.controller('QuizCtrl',quizController);