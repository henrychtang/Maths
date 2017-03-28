var app = angular.module('Maths', []);

app.controller('MathsController', function (){
    this.title="Addition Exercise by Tangs";
    this.rangeFrom=99;
    this.rangeTo=10;
    this.total=this.rangeFrom+this.rangeTo;
    //this.numbers=source;
    this.questions=longQuestion;
    this.rowSource=rowSource;
    this.answers=prepareAnswerString(this.rowSource);
    this.date=(new Date()).toString();
    this.generate=function(){
    	this.total=this.rangeFrom+this.rangeTo;
    	
    	this.rowSource=[];
    	for (j=0 ; j<this.row ; j++)
    	{
    		rowObj={};
    		rowObj['rowIndex']=j;
    		rowObj['columns']=generateQuestions(j,this.column);
    		this.rowSource.push(rowObj);
    		
    	}
    	this.answers=prepareAnswerString(this.rowSource);
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





function generateQuestions(rowIndex,cellNumber){
	var columnSource = [];
	min=10;
	max=99;
	for (i = 0; i < cellNumber; i++){
		singleObj = {};
		singleObj['questionNumber']=rowIndex*cellNumber+i+1;
		singleObj['num1'] = getRandomInt(min, max) ;
		singleObj['num2'] = getRandomInt(10, 99) ;
		singleObj['answer']=singleObj['num1']+singleObj['num2'];
		columnSource.push(singleObj);
	}
	return columnSource;
}


var rowSource=[];
for (j=0 ; j<12 ; j++)
{
	rowObj={};
	rowObj['rowIndex']=j;
	rowObj['columns']=generateQuestions(j,4);
	rowSource.push(rowObj);
	
}
//answerString=prepareAnswerString();
function prepareAnswerString(Source){
	answer=""
	for(i=0; i<Source.length; i++){
	questions=Source[i]['columns'];
	console.log(questions);	
	for(j=0;j<questions.length;j++){
		question=questions[j];
		answer=answer+" ; "+question['questionNumber']+") "+ question['answer'];
		
	}
}
	return answer;

}
//console.log(answerString);
//console.log(source);
//console.log(rowSource);

var longQuestion=[
    {question:"Anson has 24 apples. Audrey has 12 oranges. How many fruits are there totally?", answer:123}
];
