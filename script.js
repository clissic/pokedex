const boton = document.getElementById("buscar");
const dataContainer = document.getElementById("pokedex");
const inputName = document.getElementById("inputName");

boton.addEventListener("click", (e) => {
  e.preventDefault();
  const pokemon = inputName.value.toLowerCase();
  console.log(pokemon);
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const nombre = data.name.toUpperCase() 
      dataContainer.innerHTML = "";
      dataContainer.innerHTML += `
      <div class="pokemonLejos">
          <img
            src="${data.sprites.front_default}"
            alt="pikachu_img"
          />
      </div>
      <div class="dataContainer">
        <div class="nombre">
            <p>#${data.id}</p>
            <h1>${nombre}</h1>
        </div>
        <div class="img">
          <img src="${data.sprites.front_default}" alt="pikachu_img" />
        </div>
        <div class="moves">
          <h2>Moves:</h2>
          <div class="listas">
            <ul>
                <li>${data.moves[0].move.name}</li>
                <li>${data.moves[1].move.name}</li>
                <li>${data.moves[2].move.name}</li>
            </ul>
            <ul>
                <li>${data.moves[3].move.name}</li>
                <li>${data.moves[4].move.name}</li>
                <li>${data.moves[5].move.name}</li>
            </ul>
          </div>
        </div>
        <div class="abilities">
          <h2>Abilities:</h2>
          <ul>
            <li>${data.abilities[0].ability.name}</li>
            <li>${data.abilities[1].ability.name}</li>
          </ul>
        </div>
        <div class="stats">
          <h2>Stats:</h2>
          <ul>
            <li>${data.stats[0].stat.name}: ${data.stats[0].base_stat}</li>
            <li>${data.stats[1].stat.name}: ${data.stats[1].base_stat}</li>
            <li>${data.stats[2].stat.name}: ${data.stats[2].base_stat}</li>
            <li>${data.stats[3].stat.name}: ${data.stats[3].base_stat}</li>
            <li>${data.stats[4].stat.name}: ${data.stats[4].base_stat}</li>
            <li>${data.stats[5].stat.name}: ${data.stats[5].base_stat}</li>
          </ul>
        </div>
      </div>
            `;
    })
    .catch((error) => {
      console.error("Error: " + error);
    });
});
