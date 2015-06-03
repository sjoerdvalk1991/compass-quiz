var app = angular.module('quiz.controller', []);
var quizController = function($scope, $state){
	var _this = this;

	this.quizQuestion = {};

	this.cityData = [
    	{"name":"dubai", "imgUrl":"img/dubai.png"},
    	{"name":"new-york", "imgUrl":"img/new-york.jpg"},
    	{"name":"rio", "imgUrl":"img/rio.jpg"},
		{"name":"sydney", "imgUrl":"img/sydney.jpg"},
		{"name":"rome", "imgUrl":"img/rome.jpeg"},
		{"name":"kopenhagen", "imgUrl":"img/kopenhagen.jpeg"},
		{"name":"londen", "imgUrl":"img/londen.jpeg"},
	];


	this.quizMaker = function(){
		var min = 0;
		var max = 6;
		var numb = Math.floor(Math.random() * (max - min + 1) + min);
		console.log(numb);
		return _this.cityData[numb];
	}


	this.quizQuestion = this.quizMaker();
	console.log(this.quizQuestion);
}


quizController.$inject = ['$scope', '$state'];
app.controller('QuizCtrl',quizController);