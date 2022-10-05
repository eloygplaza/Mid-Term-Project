// sync function to insert the projects sinide the Home Page
async function fetchProjects() {
  let projects;
  let container = document.querySelector(".projects-list");

  const res = await fetch(
    "https://my-json-server.typicode.com/eloygplaza/Mid-Term-Project/projects"
  );

  projects = await res.json();

  // we only want to print 3 projects in HomePage
  let i = 0;
  projects.forEach((element) => {
    if (i < 3) i++;
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
fetchProjects();

// we control when the buton submit is clicked by an eventListener and we show the value through console.log()
let submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let email = document.querySelector("#email-input").value;
  if (email.length > 0) {
    // Bonus - We could add some fireworks when we receive the correct email address :D
    console.log(email);
  } else {
    console.log("Empty");
  }
});

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
