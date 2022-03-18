import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import * as bootstrap from "bootstrap";
import "@popperjs/core";

let sections = document.querySelectorAll("#sections section");
let uls = document.querySelectorAll("#uls li");

hideAll();
for (let i = 0; i < sections.length; i++) {
  uls[i].addEventListener("click", () => {
    document.querySelector("#hide").style.display = "none";
    hideAll();
    sections[i].style.display = "block";
    uls[i].classList.add("selected");
    check(i);
  });
}

function hideAll() {
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
    uls[i].classList.remove("selected");
  }
}

let idBtn = document.querySelector("#getByIdBtn");
let error = document.querySelector("#errorText");
idBtn.addEventListener("click", () => {
  let inputValue = document.querySelector("#idPerson");
  if (inputValue.value == "") {
    error.innerHTML = "You have to pick a number";
  } else {
    getUserById(inputValue.value);
  }
});

let hobbyBtn = document.querySelector("#getByHobbyBtn");
let hobbyError = document.querySelector("#errorTextHobby");
hobbyBtn.addEventListener("click", () => {
  let inputValue = document.querySelector("#hobby");
  if (inputValue.value == "") {
    hobbyError.innerHTML = "You have to pick a hobby";
  } else {
    getUserByHobby(inputValue.value);
  }
});

let zipcodeBtn = document.querySelector("#getByzipcodeBtn");
let zipcodeError = document.querySelector("#errorTextzipcode");
zipcodeBtn.addEventListener("click", () => {
  let inputValue = document.querySelector("#zipcode");
  if (inputValue.value == "") {
    zipcodeError.innerHTML = "You have to pick a zipcode";
  } else {
    zipcodeError.innerHTML = "";
    getUserByzipcode(inputValue.value);
  }
});

let deleteBtn = document.querySelector("#deleteByIdBtn");
let errorDelete = document.querySelector("#errorTextDelete");
deleteBtn.addEventListener("click", () => {
  let inputValue = document.querySelector("#idPersonDelete");
  if (inputValue.value == "") {
    errorDelete.innerHTML = "You have to pick an id";
  } else {
    errorDelete.innerHTML = "";
    deleteUserById(inputValue.value);
  }
});

function check(i) {
  switch (i) {
    case 0:
      // Get all users
      getAllUsers();
      break;
    case 1:
      // Get user by id
      break;
    case 2:
      // Get all hobbies
      getAllHobbies();
      break;
    case 3:
      // Get all zipcodes
      getAllZipcodes();
      break;
    case 4:
      // Get users by zipcode
      break;
    case 5:
      // Get users by hobby
      break;
    default:
    // code block
  }
}

function getAllUsers() {
  fetch("http://localhost:8080/devops_starter_war_exploded/api/users/all", {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      result.forEach((element) => {
        sections[0].innerHTML += `<p>User id: ${element.idPerson}, name: ${element.firstName} ${element.lastName}, phone number: ${element.phoneNumber}, email: ${element.email}</p>`;
      });
    });
}

function getUserById(id) {
  fetch("http://localhost:8080/devops_starter_war_exploded/api/users/" + id, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      if (result == null) {
        error.innerHTML = `there is no user by that id`;
      } else {
        error.innerHTML = `<p>User id: ${result.idPerson}, name: ${result.firstName} ${result.lastName}, phone number: ${result.phoneNumber}, email: ${result.email}</p>`;
      }
    });
}

function getAllHobbies() {
  fetch("http://localhost:8080/devops_starter_war_exploded/api/hobby/all", {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      result.forEach((element) => {
        sections[2].innerHTML += `<p>Hoby id: ${element.id}, name: ${element.name}, wiki link: ${element.wikiLink}, category: ${element.category}, type: ${element.type}</p>`;
      });
    });
}

function getUserByHobby(hobby) {
  fetch(
    "http://localhost:8080/devops_starter_war_exploded/api/users/hobby/" +
      hobby,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      if (result == null) {
        hobbyError.innerHTML += `None of our users has that hobby`;
      } else if (result.length < 2) {
        hobbyError.innerHTML += `<p>User id: ${result.idPerson}, name: ${result.firstName} ${result.lastName}, phone number: ${result.phoneNumber}, email: ${result.email}</p>`;
      } else {
        result.forEach((element) => {
          hobbyError.innerHTML += `<p>User id: ${element.idPerson}, name: ${element.firstName} ${element.lastName}, phone number: ${element.phoneNumber}, email: ${element.email}</p>`;
        });
      }
    });
}

function getAllZipcodes() {
  fetch("http://localhost:8080/devops_starter_war_exploded/api/cityinfo/all", {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      result.forEach((element) => {
        sections[3].innerHTML += `<p>cityinfo id: ${element.id}, zipcode: ${element.zipcode}, city: ${element.city}<p>`;
      });
    });
}

function getUserByzipcode(zipcode) {
  fetch(
    "http://localhost:8080/devops_starter_war_exploded/api/users/zipcode/" +
      zipcode,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      if (result == null) {
        zipcodeError.innerHTML += `None of our users has that zipcode`;
      } else if (result.length < 2) {
        zipcodeError.innerHTML += `<p>User id: ${result.idPerson}, name: ${result.firstName} ${result.lastName}, phone number: ${result.phoneNumber}, email: ${result.email}</p>`;
      } else {
        result.forEach((element) => {
          zipcodeError.innerHTML += `<p>User id: ${element.idPerson}, name: ${element.firstName} ${element.lastName}, phone number: ${element.phoneNumber}, email: ${element.email}</p>`;
        });
      }
    });
}
function deleteUserById(id) {
  fetch("http://localhost:8080/devops_starter_war_exploded/api/users/" + id, {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      if (result == null) {
        errorDelete.innerHTML = `there is no user by that id`;
      } else {
        errorDelete.innerHTML = `<p>The user with the id ${id} has been deleted</p>`;
      }
    });
}
