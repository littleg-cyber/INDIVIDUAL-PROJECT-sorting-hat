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


const hogwartsHouses = ['Gryffindor', 'Hufflepugg', 'Slytherin', 'Ravenclaw'];
const housedStudents = [];
const expelledStudents = [];

const sortingHat = document.getElementById("sorting-hat");
const targetDiv = document.getElementById("hidden-div");
const btn = document.getElementById("get-startedbtn");
btn.onclick = function () {
  if (targetDiv.style.display = "none") {
    targetDiv.style.display = "block";
  }
  if (sortingHat.style.display !== "none") {
    sortingHat.style.display = "none";
  } else {
    sortingHat.style.display = "block";
  }
}



const cardsOnDom = (array) => {
  // define variable to retrieve strings
  let domString = "";
  // open array using .foreach to access objects
  array.forEach(function (singleStudentObjects) {
  // take empty domString variable and add code to it
  domString = 
    domString +
    `
    <article>
      <div class="card" style="width: 18rem;">
      <h4>${singleStudentObjects.name}</h4>
      <p>${singleStudentObjects.specialSkill}</p>
      <p>${singleStudentObjects.house}</p>
      </div>
    </article>
    `;
  })
  // let studentCards be = to that div
  const studentCards = document.querySelector(".first-years");
  // reder cards to Dom 
  studentCards.innerHTML = domString;
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
