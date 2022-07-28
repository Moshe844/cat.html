
  
  var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");


myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }
  myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
  }
  myInput.onkeyup = function() {
    
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {  
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }

    var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

}
function myFunction() {
  var x = document.getElementById("psw")
  if (x.type === "password") {
    x.type = "text";
    document.getElementById('hide').style.display = "inline-block";
    document.getElementById('show').style.display = "none";
  }
  else{
    x.type = "password";
    document.getElementById('hide').style.display = "none";
    document.getElementById('show').style.display = "inline-block";
  }
}



// var message = "Hello world!";
// console.log("Good: message = "+ message)

// var a = function () {
//   var message ="inside a";
//   console.log("a: message ="+ message);

//   function b () {
//     console.log("b: message =" + message);
//   }

 
//   b();
  
// }
// a();

// var good = function () {
//   var b ="outside";
//   console.log("good: break ="+ b);
// }

// good();

// var x;
// x = 8;
// if (x == undefined) {
//   console.log("is undefined");
// }
// else{
//   console.log("is defined");
// }

var facebook = {
  name: "Facebook",
  ceo: {
    name: "Moshe",
    lastName: "Ekstein",
  },
  "stock of company": 210
};

console.log(facebook);

function makeMultiplyier(multiplier) {
  var myFunc = function (x) {
    return multiplier * x;
  };
  return myFunc;
}

var multiplyBy3 = makeMultiplyier(3)
console.log(multiplyBy3(10));

// function isHeroEqual(object1, object2, objecct3) {
//   return object1.name === object2.name;
// }
// const hero1 = {
//   name: 'Batman'
// };
// const hero2 = {
//   name: 'Batman'
// };
// const hero3 = {
//   name: 'Joker'
// };
// isHeroEqual(hero1, hero2); // => true
// isHeroEqual(hero1, hero3); // => false
// console.log(isHeroEqual(hero1, hero2, hero3));

function test() {
  console.log("good afternoon");
}
test();

function switchColor(newColor) {
  const elem = document.getElementById('para')
  elem.style.color = newColor;
}

var para = document.getElementById('para');
setInterval(function() {
  para.style.opacity = (para.style.opacity == 0 ? 1 : 0);
}, 1000);


// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(220);
//   fill('yellow');
    
//   // An ellipse at 150, 150 with radius 280
//   ellipse(150, 150, 280, 180) 
// }
// document.body.innerHTML = "Woooo, I'm all up in your webpage!";

var headingEl = document.getElementById("heading");
        headingEl.innerHTML = "All about programming";

// function changeImage() {
//   var image = document.getElementById('cool');
//   if (image.src.match("beverages-carbonated-drink-cold-drink-1571849")) {
//     image.src = "intro-1647872367.jpg";
//   } else {
//     image.src = "beverages-carbonated-drink-cold-drink-1571849.jpg";

//   }
  
  
// }
var z =0

function changeImage() {

  var image = document.getElementById('cool');
  const imges = ["", "intro-1647872367.jpg",
      "beverages.jpg",
      "icecreams.jpg",
      "susi.jpg",
      "slush.jpg",
  ]
  var i = image.id;
  // console.log(imges[z + 1]);
  image.src = imges[z + 1];
  if (z === imges.length - 1) {
      z = 0
  } else {
      z++;
  }
}


// var buttonClicker = document.getElementById('clicker');
// var onButtonClick = function() {
//   buttonClicker.textContent ="you didn't fill out that field";
// };
// buttonClicker.addEventListener("click", onButtonClick)

var whisper = document.getElementById("whisper");
var whisperClick = function(e) {
  e.preventDefault();
  var audioEL = document.createElement("audio");
  audioEL.src="four_voices_whispering_2_wecho-6755.mp3",
  audioEL.autoplay ="true";
  document.body.appendChild(audioEL);
}
whisper.addEventListener("click", whisperClick);

var countdown = document.getElementById("countdown");vi
var countIdDown = function() {
  var currentTime = parseFloat(countdown.textContent);
  if (currentTime > 0) {
    countdown.textContent = currentTime - 1;
  } else {
    window.clearInterval(timer);
  }
}
var timer = window.setInterval(countIdDown, 1000)






        