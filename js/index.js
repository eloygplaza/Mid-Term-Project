async function fetchProjects() {
  let projects;
  let container = document.querySelector(".projects-list");

  const res = await fetch(
    "https://my-json-server.typicode.com/eloygplaza/Mid-Term-Project/projects"
  );

  projects = await res.json();

  // iteramos por todos los projects
  projects.forEach((element) => {
    let titleCard = element.title; // titulo card
    let pathImageCard = `./project-assets/projects-section/${element.id}.jpg`; // url de la imagen
    let projectDescription = element.description; // descripcion card

    // creamos lo elementos a insertar en el html
    const divItem = document.createElement("div");
    divItem.classList.add("projects-item");
    const divCard = document.createElement("div");
    divCard.classList.add("projects-card");
    const divCardImage = document.createElement("div");
    divCardImage.classList.add("projects-image");
    const imgCard = document.createElement("img");
    imgCard.src = pathImageCard;
    imgCard.classList.add("projects-card-image");
    const divCardContent = document.createElement("div");
    divCardContent.classList.add("projects-content");
    const divCardText = document.createElement("div");
    divCardText.classList.add("projects-text");
    const divCardTitle = document.createElement("div");
    divCardTitle.classList.add("projects-title");
    divCardTitle.innerText = titleCard;
    const divCardDescription = document.createElement("div");
    divCardDescription.classList.add("projects-title");
    divCardDescription.classList.add("projects-description");
    divCardDescription.innerText = projectDescription;
    const linkProject = document.createElement("a");
    linkProject.classList.add("projects-link");
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

    // document.querySelector(".projects-title").innerText = titleCard;
    // document.querySelector(".projects-description").innerText =
    //   projectDescription;
    // document.querySelector(".projects-link").innerText = "Learn More";
  });
}

// ejecutamos la funcion
fetchProjects();
