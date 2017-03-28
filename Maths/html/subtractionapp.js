var app = angular.module('Maths', []);

app.controller('MathsController', function (){
    this.title="Subtraction Exercise";
    this.numbers=source;
    this.questions=longQuestion;
    this.rowSource=rowSource;
    this.answers=answerString;
    this.date=(new Date()).toString();
    this.answer = function(i){
      return this.numbers[i].num1 +  this.numbers[i].num2;
};
          
this.updateStatus=function(i, userInput){
    inputValue=userInput;
    answer= this.numbers[i].num1 -  this.numbers[i].num2;
    if (inputValue=="")
        this.numbers[i].status= "";
    else if (inputValue==answer)
        this.numbers[i].status=  "correct";
    else
        this.numbers[i].status=  "wrong";   
    };    
  });

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
/**
 * Returns a random integer between min (inclusive) and max (inclusive) Using
 * Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

source=[];
min=100;
max=200;

for (i = 0; i <3; i++){
	singleObj = {};
	singleObj['num1'] = getRandomInt(min, max) ;
	singleObj['num2'] = getRandomInt(min, max) ;
	source.push(singleObj);
}



function generateQuestions(rowIndex,cellNumber){
	var columnSource = [];
	min=10;
	max=100;
	for (i = 0; i < cellNumber; i++){
		singleObj = {};
		singleObj['questionNumber']=rowIndex*cellNumber+i+1;
		tempNumber=getRandomInt(min, max) ;
		singleObj['num1'] = tempNumber
		singleObj['num2'] = getRandomInt(min, tempNumber) ;
		singleObj['answer']=singleObj['num1']-singleObj['num2'];
		columnSource.push(singleObj);
	}
	return columnSource;
}


var rowSource=[];
for (j=0 ; j<15 ; j++)
{
	rowObj={};
	rowObj['rowIndex']=j;
	rowObj['columns']=generateQuestions(j,4);
	rowSource.push(rowObj);
	
}
answerString="";
for(i=0; i<rowSource.length; i++){
	questions=rowSource[i]['columns'];
	console.log(questions);	
	for(j=0;j<questions.length;j++){
		question=questions[j];
		answerString=answerString+" ; "+question['questionNumber']+") "+ question['answer'];
		
	}
}
console.log(answerString);

console.log(source);
console.log(rowSource);

var longQuestion=[
    {question:"Anson has 24 apples. Audrey has 12 oranges. How many fruits are there totally?", answer:123}
];
