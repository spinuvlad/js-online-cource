//var nodesDotts = [].slice.call(window.querySelectorAll('li'));
//imgs[nodesDotts.indexOf(this)].style.display = 'block';
//Object.keys(words).length - lungimea obiectului words
//Object.keys(words)[0] - prima cheie din obiectul words

function refrashDoc(){  //analog la F5
	window.location.reload();
}

function generateNum(num, range){ //declara in afara functiei masivele arr1, arr2
	for (var i = 0; i < num; i++){
		arr1[i] = Math.floor(Math.random() * Math.floor(range));
		arr2[i] = Math.floor(Math.random() * Math.floor(range));
	}
}

function generateNegativeFix(num){ //arr2[i] mereu o sa fie mai mare decat arr1[i]
	for (var i = 0; i < numE; i++){
		arr1[i] = Math.floor(Math.random() * Math.floor(num));
		arr2[i] = Math.floor(Math.random() * Math.floor(num));
		if (arr1[i] > arr2[i]){
			var temp = arr1[i];
			arr1[i] = arr2[i];
			arr2[i] = temp;
		}
	}
}

function getUniqueNums(num){
	var arr = [];

	while(arr.length < num) {
		var random = Math.floor(Math.random() * Math.floor(num));
		if(arr.indexOf(random) != -1) continue;
		arr[arr.length] = random;
	}

	return arr;
}


function arrSum(arr){ //calculeaza suma elemntelor din masiv
	var summ = 0;
	for (var i = 0; i < arr.length; i++){
		summ += arr[i];
	}
	return summ;
}

function zeroFixed(num){ //adauga un "0" la num data acesta e mai mic ca 10
if (num < 10) num = '0' + num;
return num;
}

Array.prototype.randomElem = function(){ // [1, 2, 3, 4].randomElem() - un elem din arr
	return this[Math.floor(Math.random()*this.length)];
}

function randomArrElements(arr){ //var randomArr = randomArrElements(arr);
	var randomNums = getUniqueNums(arr.length);
	var randomArr = [];
	for (var i = 0; i < arr.length; i++){
		randomArr[i] = arr[randomNums[i]];
	}

	function getUniqueNums(num){
		var numRandomArr = [];

		while(numRandomArr.length < num) {
			var random = Math.floor(Math.random() * Math.floor(num));
			if(numRandomArr.indexOf(random) != -1) continue;
			numRandomArr[numRandomArr.length] = random;
		}

		return numRandomArr;
	}

	return randomArr;
}

function groupArr(arrName, num_in_group){ //pentru num_in_group = 2; ['1', '2', '3', '4'] -> [['1', '2'], ['3', '4']]
  var newArr = [];
  
  for (var i = 0; i < arrName.length; i++){
    var temp = [];
    
    for (var j = 0; j < num_in_group; j++){
      temp.push(arrName[i+j]);
    }
    
    newArr.push(temp);
    i += j - 1;
  }
  
  return newArr;
}