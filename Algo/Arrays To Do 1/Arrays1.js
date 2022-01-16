function myArrPush(arr, val) {
var temp = arr[0], temp2 = arr[1]; //place holder for values
    for (var i = 0; i < arr.length && temp1 != undefinded; i++) {
        arr[i+1] = temp1;
        temp1 = temp2;
        temp2 = arr[i+2];
    }
    arr[0] = val; //puts value up front in array
}

//var myArr = [2, 4, 6, 8];
//myArrPush(myArr, 1);
//console.log(myArr);

function myArrPushAgain(arr, val) {
    // values move to right, loop backward
    for (var i = arr.length - 1; i >= 0; i--) {
        arr[i+1] = arr[i];
    }
    arr[0] = val; //value at start of array
}

//var myArr1 = [2, 4, 6, 8];
//myArrPush(myArr1, 1);
//console.log(myArr1);

function myArrPop(arr) {
    var Value = arr[0]; //value returned

    for (var i = 1; i < arr.length; i++) {
        arr[i-1] = arr[i];
    }
    arr.pop(); //removes last value from arrau
    return Value;
}

//var test = [2, 4, 6, 8];
//var results = myArrPop(test);
//console.log(results);

function insertArr(arr, val, ind) {
    for (var i = arr.length - 1; i >= 0; i--) {
        arr[i+1] = arr[i];
    }
    arr[ind] = val;
}

//var test2 = [2, 4, 6, 8];
//insertArr(test2,2,1);
//console.log(test2);

function removeArrAt(arr, ind) {
    if (ind >= arr.length || ind < 0) {
        return null; //return filler index value in array
    }
    var Value = arr[ind]; //value returned
    
    for (var i = ind + 1; i < arr.length; i++) {
    arr[i-1] = arr[i];
    }
    arr.pop(); //removes last value from arrau
    return Value;
}

//var thisArr = [2, 4, 6, 8, 10, 1];
//var results1 = removeArrAt(thisArr,2);
//console.log(thisArr);
//console.log(results1);

function swap(arr) {
    for (var i = 0; i < arr.length - 1; i += 2) {
        var temp = arr[i];
        arr[i+1] = temp;
    }
}

//var test1 = [];
//swap(test1);
//console.log(test1);

function removeDuplicate(arr) {
    for ( var i = 0; i < arr.length - 1; i++) {
        if (arr[i+1] == arr[i]) {
            //remove value and move everything after to left of index
            //remove last array item
            while (arr[i+1] == arr[i]) {
                removeArrAt(arr, i + 1);
            }
        }
    }
}

//var example = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
///removeDuplicate(example);
//console.log(example);
//++ acts as push and -- acts as pop without changing the value

function removeDuplicate2(arr) {
    if (arr.length <= 1) {//no duplicates for empty or array with 1 value
        return;
    }
    var previousVal = arr[0];
    var newIndex = 1;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] != previousVal) {
            previousVal = arr[i];
            arr[newIndex] = arr[i];
            newIndex++;
        }
    }
    arr.length = newIndex;
}

var nwArr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
removeDuplicate2(nwArr);
console.log(nwArr);