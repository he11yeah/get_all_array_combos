/* Function takes an int argument 
* (yourArr.length) and returns a 2d array of 
* all possible combination pairs
*
*/
function getAllCombos(arrLength){
	var targetArr = [];//create 2d array
	//loop through the array
	//no need for both iterators to reach the last index
	for(var i = 0; i<arrLength-1; i++){
		for (var j = 1; j<arrLength;j++){
			//we don't want to compare a number to itself
			// or backtrack
			if (i!==j&&i<j){
				var newArr = [];//declare with let when ES6 is fully implemented
				newArr[0] = i;
				newArr[1] = j;
				targetArr.push(newArr);
			}
		}
	}
  return targetArr;
}