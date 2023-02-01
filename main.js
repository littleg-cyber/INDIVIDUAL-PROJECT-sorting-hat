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

const cardsOnDom = (array) => {
  // define variable to retrieve strings
  let domString = "";
  // open array using .foreach to access objects
  studentsArray.forEach(function (singleStudentObjects) {
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
