var app = angular.module('myApp',[]);
app.controller('namesCtrl',function($scope){
	$scope.names = [
		{name:'Jani',country:'Norway'},
		{name:'hege',country:'sweden'},
		{name:'kai',country:'denmark'}
	];
});
