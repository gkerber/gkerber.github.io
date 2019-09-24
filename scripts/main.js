/* javascript comment */
// single-line javascript comment 
let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/waving-bear.jpg') {
      myImage.setAttribute ('src','images/waving-raccoon.jpg');
    } else {
      myImage.setAttribute ('src','images/waving-bear.jpg');
    }
}

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Bears are cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Bears are cool, ' + storedName;
}

myButton.onclick = function() {
 setUserName();  
}