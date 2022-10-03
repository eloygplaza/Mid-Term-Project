async function fetchProjects() {
  let projects;
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");

  projects = await res.json();

  let container = document.querySelector(".is-danger");

  // iteramos por todos los pokemons
  projects["results"].forEach((element) => {
    // id del pokemon
    let pokemonId = element.url.split("/")[6];
    // url de la imagen
    let imagePath = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

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
