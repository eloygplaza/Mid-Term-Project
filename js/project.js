// we add all the data about the project we selected
async function fetchProject() {
  let project;
  let id = window.location.href.split("=").pop();

  const res = await fetch(
    "https://my-json-server.typicode.com/eloygplaza/Mid-Term-Project/projects"
  );

  project = await res.json();

  document.querySelector(".project-heading").innerHTML = project[id - 1].title;
  document.querySelector(".intro").innerHTML = project[id - 1].description;
  document.querySelector(".project-description").innerHTML =
    project[id - 1].text;
  document.querySelector(
    ".project-image"
  ).style.backgroundImage = `url('./project-assets/projects-section/${id}.jpg')`;
}

fetchProject();

// sync function to insert the projects inside the Projects page
// we check first which project we are currently showing to not duplicate it
async function fetchProjectsCheck() {
  let projects;
  let container = document.querySelector(".projects-list");
  let id = window.location.href.split("=").pop();

  const res = await fetch(
    "https://my-json-server.typicode.com/eloygplaza/Mid-Term-Project/projects"
  );

  projects = await res.json();

  // we only want to print 3 projects in Project Page
  let i = 1;
  projects.forEach((element) => {
    if (i <= 3 && element.id != id) i++;
    else return;

    let titleCard = element.title; // titulo card
    let pathImageCard = `./project-assets/projects-section/${element.id}.jpg`; // url de la imagen
    let projectDescription = element.description; // descripcion card

    // creamos los elementos a insertar en el html, son 3 items
    const divItem = document.createElement("div");
    divItem.classList.add("projects-item");
    // div card
    const divCard = document.createElement("div");
    divCard.classList.add("projects-card");
    // div img
    const divCardImage = document.createElement("div");
    divCardImage.classList.add("projects-image");
    // img
    const imgCard = document.createElement("img");
    imgCard.src = pathImageCard;
    imgCard.classList.add("projects-card-image");
    // div content
    const divCardContent = document.createElement("div");
    divCardContent.classList.add("projects-content");
    // text
    const divCardText = document.createElement("div");
    divCardText.classList.add("projects-text");
    // title
    const divCardTitle = document.createElement("div");
    divCardTitle.classList.add("projects-title");
    divCardTitle.innerText = titleCard;
    // description
    const divCardDescription = document.createElement("div");
    divCardDescription.classList.add("projects-title");
    divCardDescription.classList.add("projects-description");
    divCardDescription.innerText = projectDescription;
    // link
    const linkProject = document.createElement("a");
    linkProject.classList.add("projects-link");
    linkProject.href = `project.html?id=${element.id}`;
    linkProject.innerText = "Learn More";

    // anexamos e insertamos en html
    divCardText.appendChild(divCardTitle);
    divCardText.appendChild(divCardDescription);
    divCardText.appendChild(linkProject);
    divCardContent.appendChild(divCardText);
    divCardImage.appendChild(imgCard);
    divCard.appendChild(divCardImage);
    divCard.appendChild(divCardContent);
    divItem.appendChild(divCard);
    container.appendChild(divItem);
  });
}

// we execute the function
fetchProjectsCheck();

/* burguer menu for mobile */
let mobileMenu = document.querySelector(".fa-bars");
let navMobile = document.querySelector(".nav-mobile");
mobileMenu.addEventListener("click", (e) => {
  if (navMobile.style.top == "-300px") {
    navMobile.style.top = "0px";
    mobileMenu.classList.add("fa-rotate-90");
  } else {
    navMobile.style.top = "-300px";
    mobileMenu.classList.remove("fa-rotate-90");
  }
});

// dark mode toggle
let btnDark = document.querySelector(".footer-darkmode");
btnDark.addEventListener("click", (e) => {
  // we check if dark mode is active
  let checkDark = document.getElementsByClassName("fa-moon").length;
  if (checkDark > 0) {
    btnDark.innerHTML =
      '<i class="fa-regular fa-lightbulb fa-2xl" style="color: #FFC600"></i><i class="fa-solid fa-toggle-on fa-2xl" style="color: #FFC600"></i>';
    document.querySelector("body").style.backgroundColor = "#10121a";
    document.querySelector("html").style.backgroundColor = "#10121a";
    document.querySelector(".project-heading").style.color = "#f2f4fc";
    document.querySelector(".other-projects").style.color = "#f2f4fc";
  } else {
    btnDark.innerHTML =
      '<i class="fa-solid fa-moon fa-2xl" ></i><i class="fa-solid fa-toggle-off fa-2xl"></i>';
    document.querySelector("body").style.backgroundColor = "#F2F4FC";
    document.querySelector("html").style.backgroundColor = "#F2F4FC";
    document.querySelector(".project-heading").style.color = "#292E47";
    document.querySelector(".other-projects").style.color = "#292E47";
  }
});
