document.addEventListener("DOMContentLoaded", () => {
  console.log("Happy Days the Dom is working!");

  const pokemonurl = "https://pokeapi.co/api/v2/pokemon?limit=151";
  const nationalityurl = "https://restcountries.com/v3.1/all";

  let pokemon = [];
  let nationalities = [];

  data = {
    pokemon: "Pikachu",
    name: "Harry",
    lastname: "Partirgde",
    favouriteAnimal: {
      dogs: "Monty",
      cat: "Hemingway",
    },
    age: 10,
  };

  console.log(JSON.stringify(data, null, 4));

  function getName(character) {
    pokemon.push(character.name);
  }

  function getNationality(country) {
    nationalities.push(`${country.name.official} ${country.flag}`);
    //console.log(`${country.name.official} ${country.flag}`);
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

  function nationalityIndex() {
    fetch(nationalityurl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.forEach(getNationality);
        //console.log(data);
        createNationalityDropdown();
      });
  }

  function createNationalityDropdown() {
    nationalities.forEach(function (nationality) {
      let option = document.createElement("option");
      option.text = nationality;
      let select = document.getElementById("NationalityFormControlSelect");
      select.appendChild(option);
    });
  }

  function createPokemonDropdown() {
    pokemon.forEach(function (pokemon) {
      let option = document.createElement("option");
      let pokemonCapitalised =
        pokemon.charAt(0).toUpperCase() + pokemon.slice(1);
      option.text = pokemonCapitalised;
      //option.value = "myvalue";
      let select = document.getElementById("PokemonFormControlSelect");
      select.appendChild(option);
    });
  }

  pokedex();
  nationalityIndex();

  document.querySelector("#register-button").addEventListener("click", () => {
    console.log(JSON.stringify(data));
  });
});
