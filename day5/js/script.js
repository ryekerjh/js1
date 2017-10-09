function logSomething(string) {
  console.log(string);
};

function promptUser() {
  var answer = prompt('Give me a string', 'hello world');
  logSomething(answer);
};

// promptUser();


function splitString(string) {
  console.log(string.split(''));
};

function getFullName() {
  var fullName = prompt('Give me your full name.', 'Joe Shcmoe');
  checkNames(fullName);
};

function checkNames(name) {
  var firstName;
  var lastName;
  if(name.length === 2) {
    firstName = name.split(' ')[0];
    lastName = name.split(' ')[1];
  } else if(name.length === 3) {
    firstName = name.split(' ')[0];
    lastName = name.split(' ')[2];
  } else {
    firstName = name.split(' ')[0];
    lastName = name.split(' ')[name.length - 1];
  }
  alert(firstName);
  console.log(lastName);
};

// getFullName();

// step 1: alert the first name XX
// step 2: capture and console.log the last name.XX
// step 3: account for edge cases(ie. multiple names, middle name, etc);










// splitString('cheeeeeeese');

function addStar(string) {
  var newString = string.split(' ').join('');
  alert(newString);
};
 // addStar('I love to walk to school.');
 
 function capitalize(userInput) {
   let words = userInput.split(' ');
   let i;
   var newString = [];
   for(i = 0; i < words.length; i++) {
     let firstLetter = words[i].split('')[0];
     let restOfWord = words[i].substring(1);
     firstLetter = firstLetter.toUpperCase();
     newString.push(firstLetter + restOfWord);
   };
   alertText(newString.join(' '));
 };
 
 function alertText(stringToAlert) {
  prompt(stringToAlert);
 };
 
 // capitalize(prompt('LeT Me HElp yOU CapItaLiZe'));

function checkPalindrome(string) {
  var original = string.toString();
  var reversed = string.reverse().toString();
  if(original === reversed) {
    return true;
  } else {
    return false;
  }
};
 
 
 
 
 
 
 
 
 
 
 
