
var name = getUrlParameter('name');
var topic= getUrlParameter('topic');

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};


for (i = 0; i<sentences.length; i++) {
sentences[i] = sentences[i].replace(/\$TOPIC/g,topic)	
}


// function random(min,max) {
// 	var number = Math.floor(Math.random()*max);
// 	return number;
// }


function threeRandomNum(min,max) {
	var arr = [];
	while (arr.length < 3) {
		var randomNum = Math.ceil(Math.random()*max-1)
		var found = false;
		for (var i=0;i<arr.length;i++){
			if(arr[i]==randomNum){found=true;break}
		}
		if(!found)arr[arr.length]=randomNum
	}
	return (arr);
}

var openerNumArray = threeRandomNum(0,opener.length);
var sentencesNumArray = threeRandomNum(0,sentences.length);
var closerNumArray = threeRandomNum(0,closer.length);


function answerToQuestion() {
	return ("\" " + opener[openerNumArray[0]] + " " + name + ". " + sentences[sentencesNumArray[0]] + " " + sentences[sentencesNumArray[1]]+ " " + sentences[sentencesNumArray[2]] + " "+ closer[closerNumArray[0]] + "\" "  );
}

var elem = document.getElementById("trumpTxtResponse");
elem.innerHTML = (answerToQuestion().toUpperCase());


console.log(openerNumArray);
console.log(sentencesNumArray);
console.log(closerNumArray);