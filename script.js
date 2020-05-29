// Assignment Code
var generateBtn = document.querySelector("#generate");
var myList = [];

// Write password to the #password input
function writePassword() {
    
  if (!myValue) {
    console.log("generatePassword myValue not set correctly" + myList);
    alert( "You can't generate a password you have not set a length yet."  + myValue ); 
    return;
  }
    if (!myList[0]) {
    console.log("generatePassword myList not set correctly" + myList);
    alert( "You can't generate a password you have not set the requirements"  + myList ); 
    return;
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log("pass " + password);
  passwordText.value = password;
  //reset myList
  myList = [];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var charobj = {
    uppercase: "ABCDEFGHIJKLMNOP",
    special: "!@#$%^&*()-+<>",
    numeric: "1234567890",
    lowercase: "abcdefghijklmnopqrstuvwxyz"
  }
  var chars ="";

  for (var f = 0; f < myList.length; f++) {
    if (chars){
      chars = (chars + "" + charobj[myList[f]]);
    }else {
      chars = charobj[myList[f]] ;
    }
    console.log("checking " + myList[f]);
    console.log("chars " + chars);
  }
  var pass = "";
  for (var x = 0; x < myValue; x++) {
      var i = Math.floor(Math.random() * chars.length);
      pass += chars.charAt(i);
  }
  return pass;
}

// get the legth of the password.
var myValue;
function submit() {
  myValue = document.getElementById("myTextArea").value;
  console.log("length of pword " + myValue);
  if ((!myValue.match(/^\d+$/g)) || (myValue < 8) || (myValue > 126) ) {
    alert( 'The number must be a whole number between 8 and 126: Your number is ' + myValue ); 
    myValue = "";
  }

}

// arguments: reference to select list, callback function (optional)
function getSelectedOptions(sel, fn) {
  var opts = [], opt;
  // loop through options in select list
  for (var i=0, len=sel.options.length; i<len; i++) {
      opt = sel.options[i];
      // check if selected
      if ( opt.selected ) {
          // add to array of option elements to return from this function
          opts.push(opt);
          // invoke optional callback function if provided
          if (fn) {
              fn(opt);
          }
      }
  }
  // return array containing references to selected option elements
  console.log("array = " + opts.value)
  return opts;
}

function callback(opt) {
  // display in textarea for this example
  var display = document.getElementById('display');
  display.innerHTML += opt.value + ', ';
  myList.push(opt.value);
  console.log("list now " + myList)

}

// anonymous function onchange for select list with id demoSel
document.getElementById('demoSel').onchange = function(e) {
  // get reference to display textarea
  var display = document.getElementById('display');
  display.innerHTML = ''; // reset
  var str = display.innerHTML.slice(0, -2);
  display.innerHTML = str;
};

document.getElementById('demoForm').onsubmit = function(e) {
  myList = []
  // reference to select list using this keyword and form elements collection
  var opts = getSelectedOptions( this.elements['demoSel[]'], callback);
  console.log("length" + opts.length);
  return false; // don't return online form
};