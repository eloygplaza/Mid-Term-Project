async function fetchProjects() {
  let projects;
  let container = document.querySelector(".projects-list");

  const res = await fetch(
    "https://my-json-server.typicode.com/eloygplaza/Mid-Term-Project/projects"
  );

  projects = await res.json();

  // iteramos por todos los projects
  projects.forEach((element) => {
    let titleCard = element.project - title; // titulo card
    let pathImageCard = `./projects-assets/projects-section/${
      element.project - card - id
    }.jpg`; // url de la imagen
    let projectDescription = element.project - description; // descripcion card

    // creamos lo elementos a insertar en el html
    const block = document.createElement("a");
    block.classList.add("panel-block");
    const blockSpan = document.createElement("span");
    const spanImg = document.createElement("img");
    spanImg.src = imagePath;
    spanImg.alt = element.name;
    const spanText = document.createTextNode(`${element.name}`);

    // anexamos e insertamos en html
    blockSpan.appendChild(spanImg);
    block.appendChild(blockSpan);
    block.appendChild(spanText);
    container.appendChild(block);
  });
}

// ejecutamos la funcion
fetchProjects();
