document.addEventListener("DOMContentLoaded", () => {
  console.log("Happy Days the Dom is working!");

  const pokemonurl = "https://pokeapi.co/api/v2/pokemon?limit=151";

  let pokemon = [];

  function getName(character) {
    pokemon.push(character.name);
  }

  function pokedex() {
    fetch(pokemonurl)
      .then((response) => {
        return response.json();
      })
      .then((allpokemon) => {
        //console.log(allpokemon);
        pokemonObjectArray = allpokemon.results;
        pokemonObjectArray.forEach(getName);
        //console.log(pokemon);
        createPokemonDropdown();
      });
  }

  function createPokemonDropdown() {
    let option = document.createElement("option");
    option.text = "Text";
    option.value = "myvalue";
    let select = document.getElementById("PokemonFormControlSelect");
    select.appendChild(option);
  }

  pokedex();
  document.querySelector("#register-button").addEventListener("click", () => {
    console.log("pressed");
  });
});
