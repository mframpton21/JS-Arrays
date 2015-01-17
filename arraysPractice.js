//Once you complete a problem, open up Chrome and check the answer in the console.

// Problem 1
// Create a function named 'first' that is given 'arr' as the argument and  
// returns the first item the given array.
var arr = [10,20,30];

//Code Here
var first = function() {
    return arr[0];
};

var arrElement = first();
alert(arrElement);


// Problem 2
// Create a function named 'last' that is given 'arr' as the argument and 
// returns the last item the given array.
var arr = [40,50,60];

//Code Here
var last = function(array) {
    return array[array.length - 1];
};

var arrElement = last(arr);
alert(arrElement);



// Problem 3
// Create a function named 'looper' that is given family as it's only argument, 
// loops through the given array, and alerts every item in the array.
var family = ['Tyler', 'Jordyn', 'Ryan', 'Chelsey', 'Ireland'];

//Code Here
var looper = function(array) {
  for (var i = 0; i < array.length; i++) {
    alert(array[i]);
  }
);

var result = looper(family);


// Problem 4
// Write a function called reversedLooper that is given letters as it's 
// only argument and loops through the given array backwards alerting 
// every item in the array starting at the end.
var letters = ['A', 'B', 'C', 'D', 'E'];

//Code Here
var reversedLooper = function(array) {
  for (var i = letters.length - 1; i >= 0; i--) {
    alert(letters[i]);
  }
};
var result = reversedLooper(letters);


// Problem 5
// Write a function named evenFinder that is given nums as it's only 
// argument and removes all values that aren't even from the given array.
var nums = [1,2,3,6,22,98,45,23,22,12];

//Code Here
var evenFinder = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      arr.splice(i, 1);
      i--;
    }   
  }
  return arr;    
}

var array = evenFinder(nums);
alert(array);


// Problem 6
// Write a function called divider that is given three arguments, nums, evens, and odds.
// Have divider return an Array with the first item in the array being the evens 
// array (all the even values from nums) and the second item in the Array being the odds 
// array(all the odd values from nums).
var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
var evens = [];
var odds = []

//Code Here
var divider = function(param1, param2, param3) {

  for (var i = 0; i < param1.length; i++) {
    if (param1[i] % 2 !== 0) {
      odds.push(param1[i]);
    } else {
      evens.push(param1[i]);
    }
  }
  return true;
}

var result = divider(nums, evens, odds);
alert(evens);
alert(odds);


// Problem 7
// Above your given a function that will return a random number between 0 and 30, 
// and an array full or numbers. Your job is to write a function named finder that 
// will get a random number, then loop through the array to see if that random number 
// is in the array. If it is, return true, if it's not, return false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var numbers = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

//Code Here
var finder = function() {
  var randomNumber = getRandomArbitrary();
  alert(randomNumber);

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] === randomNumber) {
      return true;
    }
  }
  return false;  
};

var result = finder();
alert(result);


// Problem 8
// Write a function called reverse that takes is given str as it's only argument 
// and returns that string after it's been reversed
var str = 'this is my sentence';

//Code Here
var reverse = function(param1) {
  return param1.split(' ').reverse().join(' ');
};

var result = reverse(str);
alert(result);


// Problem 9
//
// Here we're going to write a function that mimics going shopping and checking things 
// off of our grocery list, and adding new items to our list. Write a function called removeItem 
// that is given two arguments, the first is myGroceryList, and the second is an item to 
// remove from myGroceryList. If the second argument (or the item to add or remove) matches 
// an item in myGroceryList, remove that item from the your grocery list and return the new, 
// updated grocery list. Once you do that, write another function called addItem that is given 
// two arguments, the first is myGroceryList and the second is an item to add to your grocery list. 
// In addItem add the item you passed in to myGroceryList then return the new, updated grocery list.

// removeItem('chips') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs'];
// addItem('Jerky') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs', 'Jerky'];
var myGroceryList = ['chips', 'pizza', 'hotpockets', 'MtnDew', 'corndogs'];

//Code Here
var removeItem  = function(list, itemToRemove) {
  var i = list.indexOf(itemToRemove);

  if (i !== -1) {
    list.splice(i, 1);
  }
  return list;
};

var addItem = function(list, itemToAdd) {
  var i = list.indexOf(itemToAdd);
  list.push(itemToAdd);
  return list;
};

var removeResult = removeItem(myGroceryList, "chips");
var addResult = addItem(myGroceryList, "Jerky");
alert(removeResult);
alert(addResult);
alert(myGroceryList);


// Problem 10
// Write a function called maker that creates an array, fills that array with numbers 
// from 1 to 215, then returns the array.

//Code Here
var maker = function() {
  var array = [];

  for (var i = 0; i < 215; i++) {
    array[i] = i + 1;
  }
  return array;

};

var result = maker();
alert(result);


// Problem 11
// Write a function called addTen that is given 'numbers' as it's only argument and returns a new
// array after adding ten to each item in numbers. 
// *Verify your answer is correct. --> [15, 19, 26, 29, 35, 44, 58]
var numbers = [5, '9', 16, 19, '25', '34', 48];

//Code Here
var addTen = function(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    newArray.push(Number(array[i]) + 10);
  }
  return newArray;
};

var result = addTen(numbers);
alert(result);
alert(numbers);


// Problem 12
// Above is some code that adds a random number to both arr1 and arr2.
// Write a function that is given arr1 and arr2 is it's only arguments. Return the array which is longest.
var num1 = Math.floor(Math.random() * (30 - 0) + 0);
var num2 = Math.floor(Math.random() * (30 - 0) + 0);
var arr1 = [];
var arr2 = [];
for(var i = 0; i < num1; i++){
  arr1.push(i);
}
for(var i = 0; i < num2; i++){
  arr2.push(i);
}
alert(arr1);
alert(arr2);

//Code Here
var longest = function(array1, array2) {

  var newArray = [];

  if (array1.length > array2.length) {
    newArray.push(array1);
  } else {
    newArray.push(array2);
  }
  return newArray;
};

var result1 = longest(arr1, arr2);
alert(result1);

// As a continuation of the previous problem, write another function called 'both'.
// Your 'both' function will be given two arguments, arr1 and arr2 (from the previous example)
// 'both' should return a new array full of numbers that are found in both arr1 and arr2.


//Code Here
var both = function(array1, array2) {
  var newArray = [];


  for (var i = 0; i < array1.length; i++) {
    var index = array2.indexOf(array1[i]);

    if (index !== -1) {
      newArray.push(array1[i]);
    }
  }
  return newArray;

};

var result2 = both(arr1, arr2);
alert(result2);


