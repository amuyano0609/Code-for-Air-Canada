// Modifications function for Buttons 1, 2, 3, 4, 5, 6, 7
document.addEventListener("DOMContentLoaded", function () {
  const likeBtn = document.getElementById("likeBtn");
  const dislikeBtn = document.getElementById("dislikeBtn");
  const resetBtn = document.getElementById("resetBtn");
  const counterElement = document.getElementById("counter");
  const changeColorSchemeBtn = document.getElementById("changeColorScheme");
  const employeeBtn = document.getElementById("employeeBtn");
  const specialBtn = document.getElementById("specialBtn");
  const navbar = document.getElementById("navbar");

  const startBtn = document.querySelector(".start-btn");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const endBtn = document.querySelector(".end-btn");

  const employeeSection = document.querySelector('.employee-section');
  const personImg = document.getElementById("person-img");
  const authorElement = document.getElementById("author");
  const jobElement = document.getElementById("job");
  const infoElement = document.getElementById("info");

  let counter = 0;
  let employeeIndex = 0;

  // Info for Buttons 5 + 6 
  const employeeStatements = [
    {
      name: 'Mark Zuckerberg',
      title: 'Software Developer',
      thought: 'I love working at Air Canada!',
      img: 'https://i.imgur.com/TvGtvsU.jpg'
    },
    {
      name: 'Bill Gates',
      title: 'UX Designer',
      thought: 'Air Canada is a great place to grow and learn.',
      img: 'https://i.imgur.com/l4xUAio.jpg'
    },
    {
      name: 'Rosa Parks',
      title: 'Data Analyst',
      thought: 'The collaborative environment at Air Canada is fantastic.',
      img: 'https://i.imgur.com/8hrE4PK.jpg'
    },
    {
      name: 'Nick Vujicic',
      title: 'Project Manager',
      thought: 'Proud to be part of the Air Canada family.',
      img: 'https://i.imgur.com/TXaRfD6.jpg'
    }
  ];

  // Initial hide of the employee statement section
  if (employeeSection) {
    employeeSection.style.display = 'none';
  }

  likeBtn.addEventListener("click", () => {
    updateCounter(2);
  });

  dislikeBtn.addEventListener("click", () => {
    updateCounter(-1);
  });

  resetBtn.addEventListener("click", () => {
    resetCounter();
  });

  changeColorSchemeBtn.addEventListener("click", changeColorScheme);

  employeeBtn.addEventListener("click", () => {
    showEmployeeStatement();
  });

  specialBtn.addEventListener("click", () => {
    showSpecialConfetti();
  });

  startBtn.addEventListener("click", () => {
    showStartEmployee();
  });

  prevBtn.addEventListener("click", () => {
    showPrevEmployee();
  });

  nextBtn.addEventListener("click", () => {
    showNextEmployee();
  });

  endBtn.addEventListener("click", () => {
    showEndEmployee();
  });

  // Functions for Buttons 1 + 2 + 3
  function updateCounter(value) {
    counter += value;
    renderCounter();
  }

  function resetCounter() {
    counter = 0;
    renderCounter();
  }

  function renderCounter() {
    if (counterElement) {
      counterElement.textContent = `Counter: ${counter}`;
      counterElement.style.color = counter > 0 ? "white" : counter < 0 ? "red" : "black";
    }
  }

  // Functions for Button 4 - To change the different colors
  function changeColorScheme() {
    const colorSchemes = [
      "#eeaf61", "#fb9062", "#ee5d6c", "#ce4993", "#6a0d83",
      "#f2b035", "#f28f16", "#f26513", "#d93b18", "#d91e1e",
      "#080b12", "#0c132e", "#273c50", "#5d807f", "#8ba691"
    ];
    const randomColor = colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
    document.body.style.backgroundColor = randomColor;
  }

  // Functions for Buttons 5 + 6 - How to show the employee
  function showEmployeeStatement() {
    // Hide all elements with class "box-container"
    const boxContainers = document.querySelectorAll('.box-container');
    boxContainers.forEach(container => {
      container.style.display = 'none';
    });

    const currentEmployee = employeeStatements[employeeIndex];
    personImg.src = currentEmployee.img;
    authorElement.textContent = currentEmployee.name;
    jobElement.textContent = currentEmployee.title;
    infoElement.textContent = currentEmployee.thought;

    // Toggle the display property of the employee section
    if (employeeSection) {
      employeeSection.style.display = 'block';
    }
  }

  function showStartEmployee() {
    employeeIndex = 0;
    showEmployeeStatement();
  }

  function showPrevEmployee() {
    employeeIndex = (employeeIndex - 1 + employeeStatements.length) % employeeStatements.length;
    showEmployeeStatement();
  }

  function showNextEmployee() {
    employeeIndex = (employeeIndex + 1) % employeeStatements.length;
    showEmployeeStatement();
  }

  function showEndEmployee() {
    employeeIndex = employeeStatements.length - 1;
    showEmployeeStatement();
  }

  // Functions for Button 7
  function showSpecialConfetti() {
    alert("Have a nice day!");
    confetti();
  }

  function toggleNavbar() {
    if (navbar) {
      navbar.classList.toggle("show");
    }
  }

  // Initial render
  renderCounter();
});
