function reverseArr(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;

}

//var arr1 = [2, 4, 6, 8, 9];
//reverseArr(arr);
//console.log(arr1);

function rotateArr(arr, moveBy) {
    var movements;
    if (moveBy > 0) {
        movements = moveby % arr.length;
    } else {
        movements = Math.abs(moveBy) % arr.length;
    }
    If (moveBy > 0) {  
        for (var i = 0; i < movements; i++) {      
        //single rotation in loop
            var temp = arr[arr.length - 1];     
        //loop moves to the right one per index
            for (var x = arr.length - 2; x >= 0; x--) {
                arr[x+1] = arr[x];
        }
        arr[0] = temp;
        //temp value goes at beginning of array
    } else {
        for (var i = 0; i < movements; i++) {
        var temp = arr[0];
        for (var x = 1; x < arr.length; x++) {
        arr[x-1] = arr[x];
        }
        arr[arr.length - 1] = temp;
    }
}   
//postive values-1 rotation is the same as 20
//var arr2 = [2, 4, 6, 8, 9];
//rotateArr(arr2, 1);
//console.log(arr2);

function filterArr(arr, minVal, maxVal) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < minVal || arr[i] > maxVal) {
            for (var x = i+1; x < arr.length; x++) {
                arr[x-1] = arr[x];
            }
            arr.length--; //array length goes down by 1
            i--;
        }
    }
}

//var arr1 = [2, 4, 6, 8, 1];
//filterArr(arr1, 1, 8);
//console.log(arr1);

function filterArr2(arr, minVal, maxVal) {
    var nextI = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= minVal && arr[i] <= maxVal) {
            arr[nextI] = arr[i];
            nextI++;
            }
        }
    arr.length = nextI;
}

//var arr1 = [2, 4, 6, 8, 1];
//filterArr2(arr1, 1, 8);
//console.log(arr1);

function concatArr(arr1, arr2) {
    var newArr = []; //loop thru first array and push items in
    var cntInd = 0;
    for (var i = 0; i < arr1.length; i++) {  //newArr.push(arr1[i]);
        newArr[cntInd] = arr1[i];
        cntInd++;
    }
    for (var i = 0; i < arr2.length; i++) {  //newArr.push(arr1[i]);
        newArr[cntInd] = arr2[i];
        cntInd++;
    }
    return newArr;
}

//var result1 = concatArrays([1, "yes," 3] [3, "no"]);
//console.log(results1);

function buildNewArr(arrayTo, arrayFrom) {
    var cntInd = arrayTo.length;
    for(var i = 0; i < arrayFrom.length; i++) {
        newArr[cntInd] = arrayFrom[i];
        cntInd++;
    }
}

var result1 = concatArr([1, "yes," 3] [3, "no"]);
console.log(result1);
