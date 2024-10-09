// Function to show/hide information based on button click
document.querySelectorAll(".portfolio-btn").forEach((button) => {
  button.addEventListener("click", () => {
    // Check if the button is already expanded
    const isExpanded = button.classList.contains("expanded");

    // Hide all info sections first
    hideAllInfoSections();

    if (!isExpanded) {
      // Toggle the info of the clicked button
      const infoSection = button.querySelector(".info");

      if (infoSection) {
        infoSection.style.display = "flex"; // Show the info
        button.classList.add("expanded"); // Add class for animation
        hideOtherButtons(button); // Hide other buttons
      }
    } else {
      // Show all buttons again if the clicked button was already expanded
      showAllButtons();
    }
  });
});

// Function to hide all info sections
function hideAllInfoSections() {
  document.querySelectorAll(".portfolio-btn .info").forEach((info) => {
    info.style.display = "none"; // Hide all info sections
    info.parentElement.classList.remove("expanded"); // Reset button state
  });
}

// Function to hide other buttons
function hideOtherButtons(exceptButton) {
  document.querySelectorAll(".portfolio-btn").forEach((button) => {
    if (button !== exceptButton) {
      button.style.display = "none"; // Hide other buttons
    }
  });
}

// Function to show all buttons
function showAllButtons() {
  document.querySelectorAll(".portfolio-btn").forEach((button) => {
    button.style.display = "flex"; // Show all buttons
  });
}

// Mouse movement functions for the smiley
const className = "smiley__wrapper";
const smiley = document.getElementById(className);

const mouseFunction = (mouse) => {
  const clientX = mouse.clientX || mouse.touches[0].clientX;
  const clientY = mouse.clientY || mouse.touches[0].clientY;

  updateSmileyPosition(clientX, clientY);
};

// Function to update smiley position based on mouse coordinates
function updateSmileyPosition(clientX, clientY) {
  if (clientX > window.innerWidth / 2 + 20) {
    smiley.classList.add(`${className}--right`);
    smiley.classList.remove(`${className}--left`);
  } else if (clientX < window.innerWidth / 2 - 20) {
    smiley.classList.add(`${className}--left`);
    smiley.classList.remove(`${className}--right`);
  } else {
    smiley.classList.remove(`${className}--right`, `${className}--left`);
  }

  if (clientY > window.innerHeight / 2 + 20) {
    smiley.classList.add(`${className}--bottom`);
    smiley.classList.remove(`${className}--top`);
  } else if (clientY < window.innerHeight / 2 - 20) {
    smiley.classList.add(`${className}--top`);
    smiley.classList.remove(`${className}--bottom`);
  } else {
    smiley.classList.remove(`${className}--bottom`, `${className}--top`);
  }
}

// Add mousemove event listener to the document
document.addEventListener("mousemove", mouseFunction);
document.addEventListener("touchmove", mouseFunction);

// Project data
const projects = [
  {
    title: "Stucore App Development Project",
    description:
      "A mobile app aimed at enhancing academic success and well-being for students.",
  },
  {
    title: "RCMC System Improvement Project",
    description:
      "Focused on developing a system to enhance medical center operations.",
  },
  {
    title: "Personal Website",
    description:
      "A portfolio website showcasing my design and web development skills.",
  },
];

let currentProjectIndex = 0;

// Function to update the project card
function updateProjectCard() {
  const projectTitle = document.getElementById("project-title");
  const projectDescription = document.getElementById("project-description");

  projectTitle.textContent = projects[currentProjectIndex].title;
  projectDescription.textContent = projects[currentProjectIndex].description;
}

// Event listeners for project navigation buttons
document.getElementById("prev-btn").addEventListener("click", () => {
  currentProjectIndex =
    currentProjectIndex > 0 ? currentProjectIndex - 1 : projects.length - 1;
  updateProjectCard();
});

document.getElementById("next-btn").addEventListener("click", () => {
  currentProjectIndex =
    currentProjectIndex < projects.length - 1 ? currentProjectIndex + 1 : 0;
  updateProjectCard();
});

// Initialize the project card with the first project
updateProjectCard();
