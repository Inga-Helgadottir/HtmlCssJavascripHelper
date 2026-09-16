import "./style.css"; 
/* 
This is how you import css files, 
after writing import "./" most editors will let you find the file you are looking for
*/

import "bootstrap/dist/css/bootstrap.css";
import * as bootstrap from "bootstrap";
/*
This is how you import bootstrap
*/

import "@popperjs/core";
/*
importing popperjs (Tooltip & Popover Positioning Engine, https://www.npmjs.com/package/@popperjs/core)
*/

import img from "../public/smiley.png";
/*
this is how you add an image to your html in a SPA
you have to import it in a SPA
but in a normal html it is enough to write this in the html
<img src="/src/smiley.png" alt="smiley face" id="img">
*/

/* 
to add a javascript file to your SPA
import "./javascriptFileName";

or to import a single function
import functionName from "./javascriptFileName";

or to import 2 or more functions
import { functionName, secondFunctionName } from "./javascriptFileName";

if you want to add a javascript file you do it here with the other imports
in order for that to work you need to add to the other javascript file
export default functionName;
*/

/* 
to run the code write npm i then npm start in the terminal
Inhold:
- favicon
- setting up the page changer
- innerHTML
- doing something when a key is pressed
- the difference between == and ===
- useful little things
- fetch 
- dropdown
- forms 
- getting info from html in js
- tables
- running a function after a given time
*/
var link = document.createElement("link");
//this means I want to create a link, witch is the tag for making a favicon

link.type = "image/png"; //what type of image is it?
link.rel = "icon"; //what kind of image is it?
link.href = img; //link to the image, which i got from the imported image on line 18

document.getElementsByTagName("head")[0].appendChild(link);
//document.getElementsByTagName("head")[0] gets the first element in the head tag at the top of my html page

//appendChild(link) puts the link I just created in the head tag

//-----------------------------------------------SETTING UP THE PAGE CHANGER
/*
document says we are looking in the html document
querySelector says that whatever comes next class, id or element selector surrounded by ("") is what im looking for
if you use querySelector on a group items, you only get the first one
if you want them all you need to use querySelectorAll

examples of things you can put in the ("") after querySelector or querySelectorAll
in javascript  -  in the html        -  in css      - selector type
(".className") - class="className"   - .className{} - class
("#idName")    - id="idName"         - #idName{}    - id
("body")       - <body></body>       - body{}       - element
("div")        - <div></div>         - div{}        - element
("section")    - <section></section> - section{}    - element
*/

let sections = document.querySelectorAll("#sections section");
/*
This line makes an array of every section, in the section labled id="sections"
<section id="sections"> this array would have a length of 3, to get the length write sections.length
  <section>
    this one has the id of 0
    and you can call it in javascript with the following line
    sections[0]
  </section> 
  <section>
    this one has the id of 1
    and you can call it in javascript with the following line
    sections[1]
  </section> 
  <section>
    this one has the id of 2
    and you can call it in javascript with the following line
    sections[2]
  </section> 
</section>
*/

/*
This is how you logg things in the console
to see the console, start the project and while on localhost: 
Ctrl + Shift + I (or F12) on Windows/Linux, and Cmd + Option + I on Mac.
*/
console.log("This is what the section array looks like in the console:");
console.log(sections);
console.log("The length of the section array is: " + sections.length);

let uls = document.querySelectorAll("#uls li");
/*
This line makes an array of every li in the ul labled id="uls"
<ul id="uls"> This array has the length of 3, to get the length write uls.length
  <li>
    this one has the id of 0
    and you can call it in javascript with the following line
    uls[0]
  </li>
  <li>
    this one has the id of 1
    and you can call it in javascript with the following line
    uls[1]
  </li>
  <li>
    this one has the id of 2
    and you can call it in javascript with the following line
    uls[2]
  </li>
</ul>
*/

hideAll(); // this line just calls the function called hideAll
// the reason I call it here is so that when I start the site all the sections are hidden

for (let i = 0; i < sections.length; i++) {
  /* 
  This is a for loop
  
  let i = 0; 
  (what would you like to call the index = i and what number do you want to start at = 0)
  
  i < sections.length; 
  (how many itterations do you want = the length of my sections array)
  (other options: i <= sections.length, i < 6, i >= someVariable)
   
  i++
  (how would you like the index to change after each itteration = increment it by 1)
  (other options: --, -4, +2...)
  */
  
  uls[i].addEventListener("click", () => {
  /* 
  If you remember you can call one of the array items by calling uls[0], uls[1]...
  here I use the let i in the for loop to call all of the items in my array
  the eventListener is a function that pays attention to a specific action
  in this case I have chosen click to see the other options check out this page https://www.w3schools.com/jS/js_htmldom_eventlistener.asp
  the ()=>{} part is just like writing function functionName(){} just without naming the function
  everything inside these {} runs everytime you click whatever the eventListener is connected to
  */

    document.querySelector("#hide").style.display = "none";
    /*
    This line is to hide the headline <h1 id="hide">Welcome to my site</h1>
    This line finds the item in the html document with the id="hide" 
    style comes from css (Cascading Style Sheets) it means that I want to change something in it's css
    display is a css thing which I explain more in the style.css file
    but the basics to understand this:
    display = "none" hides everything inside the element with id="hide" because of the ("#hide") part and
    display = "block" shows it
    */

    hideAll();
    // here I call the function again so that every section is hidden before I show the selected one

    sections[i].style.display = "block";
    // here I show the correct section that is matched to its li

    uls[i].classList.add("selected");
    /* 
    now it's time to change the clicked lis background to green
    I do that by adding a class I have made in my css, 
    it looks like this in the css
    .selected {
        background-color: #4caf50;
    }
    the #4caf50 is a green color
    when writing a color you can write green, blue
    or you can google color picker and pick any color, any brightness
    colors can be #000 (black), #ffffff (white), 
    #f00 (red), #0f0 (green), #00f (blue)
    #000 is the same as #000000
    #f00 is the same as #ff0000
    */
  });
  /*
  This is a simplified verson of the code above
  for (let i = 0; i < sections.length; i++) {
    uls[i].addEventListener("click", functionName)
  }

  function functionName(){
    document.querySelector("#hide").style.display = "none";
    hideAll();
    sections[i].style.display = "block";
    uls[i].classList.add("selected");
  }
  */
}

/*
This function hides all my sections and turns all the lis back to dark grey
*/
function hideAll() {
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
    //this line hides all the setions in my array
    
    if (uls[i].classList.contains("selected")) {
      //this line checks if the current uls has the class selected
      //I need that line because you can not remove a class that the elements does not have
      
      uls[i].classList.remove("selected");
      //here I just remove the class 
    }
  }
}

//-------------------------------------------INNERHTML-----------------------------------------------------------------------
let divId = document.querySelector("#divId");
//this selects the p tag in my html with the id="pTagId"

divId.innerHTML += `<ul id="stopBackground">
<li><a href="https://www.google.com/" target="_blank">google link</a></li>
<li><a href="https://www.yahoo.com/" target="_blank">yahoo link</a></li>
<li><a href="https://www.youtube.com/" target="_blank">youtube link</a></li>
</ul>`;
/*
innerHTML just means that I want to add to the html
here I user innerHTML to write all that is in the middle of the ``, inside the div with the id="divId"
this is what the div looks like in the html 
<div id="divId">This is a div</div>
and this is what it looks like after the code above runs
<div id="divId">
  This is a div
  <ul id="stopBackground">
    <li><a href="https://www.google.com/" target="_blank">google link</a></li>
    <li><a href="https://www.yahoo.com/" target="_blank">yahoo link</a></li>
    <li><a href="https://www.youtube.com/" target="_blank">youtube link</a></li>
  </ul>
</div>
if I had written that code without the + it would have overwritten the text already in the div
the reason I gave this ul the id="stopBackground" is because there is a css style on ul
an element selector (nav, body, div, section...) will be overwritten by a class="" and an id=""
a class selector will be overwritten by an id=""
*/

//-----------------------------------------------DOING SOMETHING WHEN A KEY IS PRESSED--------------------------------------------
document.addEventListener("keydown", (event) => {
/*
this function gets called every time you press a key
event is a variable you use in the function to get information about the key pressed 
*/
  console.log("this is what the event looks like on it's own in the console: ");
  console.log(event);
  
  console.log("this is the keycode for the key you pressed: " + event.keyCode);
  //keyCode is the id of the key
  //if keyCode has a line through it, dont worry it still works
  
  console.log("you can also see whitch key it is: " + event.key);
  //this line writes the name of the key pressed
  
  if (event.keyCode == 36) {
    console.log("You have pressed the up arrow");
    
  } else if (event.keyCode == 40) {
    console.log("You have pressed the down arrow");
    
  } else if (event.keyCode == 37) {
    console.log("You have pressed the left arrow");
    
  } else if (event.keyCode == 39) {
    console.log("You have pressed the right arrow");
  }
  //these are the keyCodes for the arrows
});
/*
This is a simplified verson of the code above
document.addEventListener("keydown", functionName(event))

function functionName(event){
  console.log("this is the keycode for the key you pressed: " + event.keyCode);
}
*/

//---------------------------------THE DIFFERENCE BETWEEN == AND === ---------------------------------------------------------------------

console.log("The difference between == and ===, is that === looks deeper");
console.log(0 == "0");
console.log(
  `0 == "0" is true because they are both the number 0 even though one of the is a string and the other an int`
);

console.log(0 === "0");
console.log(
  `0 === "0" is false because one is a string and the other is a number`
);

//---------------------------------OTHER USEFUL LITTLE THINGS-----------------------------------------------------
console.log("window.location.href returns you the link in the window");
console.log("window.location.href returns: " + window.location.href);
console.log("An array in javascript does not need to be confined to one data type");

let array = [2, "haha", "<p>this is a p tag</p>", 55];
console.log(array);

console.log("to get an element in an array you use array[index]");
console.log("array[0]: " + array[0]);

console.log("array.forEach(element => {");
array.forEach((element) => {
  /*
  this is a forEach loop in javascript
  in java it would look like this
  for(String element: array){}
  */
  console.log("element: " + element);
});
console.log("}");

//-------------------------------------------FETCH--------------------------------------------------------------------------
//-------------------------------------------READ
/* 
This is what the html looks like
<h3>Read (GET)</h3></br>
<a href="http://api.jokes.one/?ref=apilist.fun">this is a link to its documentation behind the following get</a></br>
<button id="getBtn" class="myBtn">Get all pokemons</button>
<button id="getBtnHide" class="myBtn">Hide get all pokemons</button>
<p id="errorTextGet"></p>
<div id="getContainer"></div>
*/
let getPokemonsBtn = document.querySelector("#getBtn");
//this gets my button

getPokemonsBtn.addEventListener("click", getAllPokemons);
//this calls the function getAllPokemons every time the button is clicked

let inputInfoHere = document.querySelector("#getContainer");
//this gets my div

function getAllPokemons() {
  inputInfoHere.style.display = "block";
  //this makes sure that if the div is hidden, it will still be shown
  
  fetch("https://pokeapi.co/api/v2/pokemon/", {
    method: "GET", // GET, POST, PUT, DELETE
    mode: "cors", // no-cors, cors, same-origin
    cache: "no-cache", // default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, omit
   
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
      //this tells what kind of response we want
    })
    .then(function (result) {
      console.log("This is the result i get");
      console.log("result: " + result);
      
      console.log("This is how i get stuff from the result");
      console.log("result.count : " + result.count);
      
      console.log("result.results : ");
      console.log(result.results);
      
      console.log("result.results[1] : ");      
      console.log(result.results[1]);
      
      console.log("result.results[1].name : ");      
      console.log(result.results[1].name);
      
      for (let i = 0; i < result.results.length; i++) {
        inputInfoHere.innerHTML += `<h3>Pokemon name: ${result.results[i].name}</h3></br>
         <p>Pokemon url: ${result.results[i].url}</p>
        `;
      }
    });
}

let hidePokemonBtn = document.querySelector("#getBtnHide");
//this gets my hide button

hidePokemonBtn.addEventListener("click", () => {
  inputInfoHere.style.display = "none";
  //this hides the div where i put my get result
});

//---------------------------------------------------------DELETE
/* this is what the html looks like
<h3>Delete (DELETE) - this was made using our REST API</h3>
<label for="idPerson">select id</label>
<input type="number" id="idPersonDelete" />
<button id="deleteByIdBtn" class="myBtn">delete person</button>
<p id="errorTextDelete"></p>
REMEMBER this fetch only works if you are running our CA1 project (tomcat)
*/
let deleteBtn = document.querySelector("#deleteByIdBtn");
let errorDelete = document.querySelector("#errorTextDelete");

deleteBtn.addEventListener("click", () => {
  let input = document.querySelector("#idPersonDelete");
  if (input.value == "") {
    //input.value gets what is written in the input
    //input.value == "" checks if the input is empty
    
    errorDelete.innerHTML = "You have to pick an id";
    //this replaces the elements text with You have to pick an id
    
  } else {
    errorDelete.innerHTML = "";
    //this empties the element
    
    deleteUserById(inputValue.value);
    //this calls the function with the value of the input
  }
});

function deleteUserById(id) {
  fetch("http://localhost:8080/devops_starter_war_exploded/api/users/" + id, {
    method: "DELETE", // GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, same-origin
    cache: "no-cache", // default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      if (result == null) {
        //if the result is null, it means that the endpoint doesnt exist
        
        errorDelete.innerHTML = `there is no user by that id`;
      } else {
        errorDelete.innerHTML = `<p>The user with the id ${id} has been deleted</p>`;
      }
    });
}

//---------------------------------POST in theory--------------------------------------------------------------------------
//since I cant find a free API with full CRUD to test on our POST needs to be theoretical
/*
let theoryInput = document.querySelector("#theoryInput");
let's pretend that this is an actual input on our site

this is what it would look like in the html
<input type="email" id="theoryInput" />

you would also need a button to press when you have written the correct email in the input
<button id="theoryBtn">check input value now</button>

let theoryBtn = document.querySelector("#theoryBtn");
theoryBtn.addEventListener("click", post(theoryInput.value));
*/
function post(theEmail) {
  let data = { email: theEmail };
  //here you make an object out of the info you want to add to the API
  fetch("http://localhost:4000/newsletters", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    //here I tell the fetch what to change, JSON.stringify changes the information into a json object
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    });
}
//---------------------------------DROPDOWN--------------------------------------------------------------------------
/*
This is what it looks like in the html
<h2>dropdown</h2>
<h2>Here are 2 different ways to make a drodown</h2>
<button id="dropdownBtn" class="myBtn">click here</button>
<div id="dropdownDiv" class="dropDown">
  <p>this is what the javascript code looks like</p>
  <p>the code</p>
</div></br>
<button id="dropdownBtn2" class="myBtn">click here 2</button>
<div id="dropdownDiv2" style="display: none;">
  <p>this is what the javascript code looks like</p>
  <p>the code</p>
</div>

this is what the class dropDown looks like in css
.dropDown {
  display: none;
}
*/
let dropdown = document.querySelector("#dropdownBtn");
let dropdownDiv = document.querySelector("#dropdownDiv");

dropdown.addEventListener("click", () => {
  if (dropdownDiv.classList.contains("dropDown")) {
    //this checks if the dropdownDiv has a class called dropdown
    
    dropdownDiv.classList.remove("dropDown");
    //if it does it removes the class
    
  } else {
    dropdownDiv.classList.add("dropDown");
    //if it doesnt it adds the class
  }
});

let dropdown2 = document.querySelector("#dropdownBtn2");
let dropdownDiv2 = document.querySelector("#dropdownDiv2");

dropdown2.addEventListener("click", () => {
  if (dropdownDiv2.style.display == "none") {
    //checks if dropdownDiv2 is hidden
    
    dropdownDiv2.style.display = "block";
    //shows it
    
  } else {
    dropdownDiv2.style.display = "none";
    //if not it hides it
  }
});
// examples of other styles you can affect-----in css
/* 
you can add any style in javascript
if the style looks like this in css background-color
it becomes camelcase: backgroundColor
 */
dropdownDiv2.style.border = "solid 2px #000"; //border:solid 2px #000;
dropdownDiv2.style.margin = "5px 2px"; //margin: 5px 2px;
dropdownDiv2.style.cursor = "pointer"; //cursor:pointer;
dropdownDiv2.style.backgroundColor = "aqua"; //background-color: aqua;
dropdownDiv2.style.paddingBottom = "2px"; //background-color: aqua;
dropdownDiv2.style.width = "600px"; //width: 600px;

//---------------------------------FORMS--------------------------------------------------------------------------
let form = document.querySelector(".form");
//here I get the form

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //this function gets called when you press the submit button
  /*
  this is what a submit button looks like in html
  <input type="submit" value="Submit">
  it NEEDS to have type="submit"
  the value="submit" is the text inside the button

  the event.preventDefault(); stops the the site from refreshing itself when the form is submittet
  */
  
  console.log("this is the event that get sent when you press the submit button");
  console.log(event);

  //first we get all of the p tags underneath the inputs 
  let formItems = document.querySelectorAll(".form p"); 
  
  //then we get all of the input values
  let name = document.querySelector(".form__name");
  let email = document.querySelector(".form__email");
  let number = document.querySelector(".form__number");
  let textarea = document.querySelector(".form__comment");
  let checkbox = document.querySelector(".form__checkbox");
  let select = document.querySelector(".form__select");
  let date = document.querySelector(".form__date");
  let password = document.querySelector(".form_password");
  let password2 = document.querySelector(".form_password2");

  formItems[0].innerHTML = "name: " + name.value;
  //this selects the first item in my formItems array
  //then it adds the text name: and then the value of the name input to the ptag under the input
  //the next lines do the same for every other item in the form
  formItems[1].innerHTML = "email: " + email.value;
  formItems[2].innerHTML = "number: " + number.value;
  formItems[3].innerHTML = "textarea: " + textarea.value;
  formItems[4].innerHTML = "checkbox: " + checkbox.value;
  formItems[5].innerHTML = "select: " + select.value;
  formItems[6].innerHTML = "date: " + date.value;
  formItems[7].innerHTML = "password: " + password.value;
  formItems[8].innerHTML = "password2: " + password2.value;

  //you can also check the difference between 2 of them, thats why i have the repeat password input
  if (password.value == password2.value) {
    console.log(
      "the passwords match, the next console.log has password.value == password2.value inside it"
    );
    console.log(password.value == password2.value);
  } else {
    console.log("the passwords do not match");
    console.log("password.value: " + password.value);
    console.log("password2.value: " + password2.value);
  }

  if (password.value == "") {
    console.log("the password is empty");
  } else {
    console.log("the password is not empty");
  }
});

document.querySelector("#img").src = img; //img comes from the import on line 5
document.querySelector("#img").alt = "smiley face";
/*the src is the path to the image
the alt is for people using a screen reader (blind people)
here i set the src and the alt of the image in my html
it looks like this in the html
<img src="" alt="" id="img">
*/

//---------------------------------TABLES--------------------------------------------------------------------------
let fillTableBtn = document.querySelector("#fillTable");
fillTableBtn.addEventListener("click", fillTableFunction);

function fillTableFunction() {
  let myTable = document.querySelector("#table");
  fetch("https://pokeapi.co/api/v2/pokemon/", {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    //this is just information about the fetch
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
      //this tells what kind of response we want
    })
    .then(function (result) {
      console.log("the pokemon API result looks like this");
      console.log(result);
      /*result.results is an array inside the result object
      therefor i can use a forEach to loop through it
       */
      result.results.forEach((element) => {
        myTable.innerHTML += `<tr>
          <td>${element.name}</td>
          <td>${element.url}</td>
        </tr>`;
        /* inside each item in that array there is a name and a url
        element.name is how i get the name
        if i had to get one of the items i would call it like a normal array
        result.results[PutIndexNumberHere]
        then i get the name with
        result.results[PutIndexNumberHere].name
      */
      });
    });
}
//---------------------------------RUNNING A FUNCTION AFTER A SURTON TIME--------------------------------------------------------------------------
let alertBtn = document.querySelector("#timeOutBtn");

alertBtn.addEventListener("click", () => {
  setTimeout(() => {
    alert("I am an alert box!");
  }, 2000);
  /*
  setTimeout means i want to wait before running the code inside
  everything inside {} will run after 2 seconds
  because of the 2000 number (it is written in milliseconds)
  alert("I am an alert box!"); 
  makes an alert box appear with the text "I am an alert box!" written on it
  */
});
//---------------------------------MAP--------------------------------------------------------------------------
let mapArray = [2, 3, 6, 5, 7];
console.log("mapArray");
console.log(mapArray);
let mapArrayAfter = mapArray.map(myFunction);
/*
this line maps the array
that means that for every item in the array
it calls myFunction
myFunction just multiplies every item in the array with 10
*/
function myFunction(num) {
  return num * 10;
}
console.log("mapArrayAfter");
console.log(mapArrayAfter);
// mapArrayAfter = [20, 30, 60, 50, 70];

const tasks = [
  {
    name: "Write for Envato Tuts+",
    duration: 120,
  },
  {
    name: "Work out",
    duration: 60,
  },
  {
    name: "Procrastinate on Duolingo",
    duration: 240,
  },
];
const task_names = tasks.map((task) => task.name);
/*
here i am making an array out of just the names in my tasks array
*/
console.log("tasks");
console.log(tasks);
console.log("task_names");
console.log(task_names);
/* this is what the task_names looks like in the console
Array(3) [ "Write for Envato Tuts+", "Work out", "Procrastinate on Duolingo" ]
*/
//---------------------------------FILTER--------------------------------------------------------------------------
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);
/* filter does exactly the what you think, it filters an array/object
here i send each of the values to the checkAdult function
that function just checks if the number is above or equal to 18
if it is, it gets added to the result array
that is why the result array looks like this
Array(3) [ 32, 33, 40 ]
*/
function checkAdult(age) {
  return age >= 18;
}

console.log("ages");
console.log(ages);
/* this is ages
Array(4) [ 32, 33, 16, 40 ]
*/

console.log("result");
console.log(result);
/* this is result
Array(3) [ 32, 33, 40 ]
*/
