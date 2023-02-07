const studentsArray = [
  {
    id: 1,
    name: "Harry Potter",
    specialSkill: "Insane Quidditch skils, impulsive, and a little lazy with his homework",
    house: "Gryffindor",
  },
  {
    id: 2,
    name: "Luna Lovegood",
    specialSkill: "Quick witted and a bit misunderstood",
    house: "Ravenclaw",
  },
  {
    id: 3,
    name: "Snape",
    specialSkill: "An intelligent massive jerk that neglects shampoo",
    house: "Slytherin",
  },
];
const hogwartsHouses = ['Gryffindor', 'Hufflepuff', 'Slytherin', 'Ravenclaw'];
const expelledStudents = [];


//render to DOM utility function 
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  
  selectedDiv.innerHTML = htmlToRender;
};

//WELCOME PAGE
const sortingHat = document.getElementById("sorting-hat");
const targetDiv = document.getElementById("hidden-div");
const getStartedBtn = document.getElementById("get-startedbtn");
// function to hide+show divs on click. CHANGE TO FAT ARROW FUNCTION
getStartedBtn.onclick = function () {
  if (targetDiv.style.display = "none") {
    targetDiv.style.display = "block";
  }
  if (sortingHat.style.display !== "none") {
    sortingHat.style.display = "none";
  } else {
    sortingHat.style.display = "block";
  }
}

// get cards on the DOM
const cardsOnDom = (array) => {
  // define variable to retrieve strings
  let domString = "";
  for (const item of array) {
    domString += 
    `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <h5>${item.house}</h5>
    </div>
    <button class="btn btn-danger" id="expel--${item.id}">Expel</button>
  </div>`
  }

 renderToDom("#first-years", domString);

};

// render dark side on the DOM
const voldyOnDom = (array) => {
  let domString = "";
  for (const student of array) {
    domString += 
    `<div class="card mb-3" style="width: 14rem;">
      <div class="card-body">
        <h5 class="card-tite">Sadly, ${student.name} has moved to the dark side</h5>
      </div>
    </div>`
  }

  renderToDom("#thedarkside", domString);
};

// function to filter students with specific house
const filter = (studentsArray, typeString) => {
  const houseArray = []
  for (const student of studentsArray) {
    if (student.house === typeString) {
      houseArray.push(student);
    }
  }

  return houseArray;
};
//target all buttons on the DOM 
const showAllButton = document.querySelector("#all");
const showGryffindorButton = document.querySelector("#gryffindor");
const showHufflepuffButton = document.querySelector("#hufflepuff");
const showRavenclawButton = document.querySelector("#ravenclaw");
const showSlytherinButton = document.querySelector("#slytherin");
// add click event to show all the cards on button click 
showAllButton.addEventListener("click", () => {
  cardsOnDom(studentsArray);
});
// add click event to filter all cards that are each house on button click
showGryffindorButton.addEventListener("click", () => {
  const gryffindorHouse = filter(studentsArray, "Gryffindor");
  cardsOnDom(gryffindorHouse);
});
showHufflepuffButton.addEventListener("click", () => {
  const hufflepuffHouse = filter(studentsArray, "Hufflepuff");
  cardsOnDom(hufflepuffHouse);
});
showRavenclawButton.addEventListener("click", () => {
  const ravenclawHouse = filter(studentsArray, "Ravenclaw");
  cardsOnDom(ravenclawHouse);
});
showSlytherinButton.addEventListener("click", () => {
  const slytherinHouse = filter(studentsArray, "Slytherin");
  cardsOnDom(slytherinHouse);
});

//function to create student
const createStudent = (event) => {
  event.preventDefault();
  //grab name from the form
  const studentName = document.getElementById("student");
  console.log(studentName);
  console.log(studentName.value);
  // create an object from values 
  const newStudent = {
    name: studentName.value,
    house: hogwartsHouses[Math.floor(Math.random()*hogwartsHouses.length)],
  };
  console.log("new student", newStudent);
  //push to students array 
  studentsArray.push(newStudent);

  //rerender with new array
  cardsOnDom(studentsArray);
};

//Sort button
const sortButton = document.querySelector("#form-submit");
sortButton.addEventListener("click", createStudent);

// Expel button
const expelStudent = (e) => {
  //if id includes expell button
  if (e.target.id.includes("expelButton")) {
    // get that object id off of the target ID
    const [, studentId] = e.target.id.split("--");
    // use it to find the index of the object 
    const studentIndex = team.findIndex (
      (student) => Number(studentId) === student.id
      );
      const expelledStudent = studentsArray.splice(studentIndex, 1);
      
      expelledStudents.push(expelledStudent);

      voldyOnDom(expelledStudent);
      cardsOnDom(studentsArray);
  }
}



const startApp = () => {
  cardsOnDom(studentsArray);
};

startApp();
