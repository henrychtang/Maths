var app = angular.module('Maths', []);

app.controller('MathsController', function (){
    this.title="Addition Test by AngularJS";
    this.numbers=source;
    this.questions=longQuestion;
    this.answer = function(i){
      return this.numbers[i].num1 +  this.numbers[i].num2;
};
          
this.updateStatus=function(i, userInput){
    inputValue=userInput;
    answer= this.numbers[i].num1 +  this.numbers[i].num2;
    if (inputValue=="")
        this.numbers[i].status= "";
    else if (inputValue==answer)
        this.numbers[i].status=  "correct";
    else
        this.numbers[i].status=  "wrong";   
    };    
  });

var source=[
    {num1:59, num2:48, status:""},
    {num1:95, num2:82, status:""},
    {num1:37, num2:24, status:""},
	{num1:83, num2:46, status:""},
	{num1:32, num2:48, status:""},
	{num1:24, num2:52, status:""},
	{num1:23, num2:74, status:""}
];
var longQuestion=[
    {question:"Anson has 24 apples. Audrey has 12 oranges. How many fruits are there totally?", answer:123},
    {question:"Johon has 35 candies. He gives 7 to Susan.  How many candies he left?", answer:123},
    {question:"Johon has 35 candies. He gives 7 to Susan.  How many candies he left?", answer:123}
];
