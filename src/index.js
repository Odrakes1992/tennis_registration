import Player from "./player.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Happy Days the Dom is working!");

  const pokemonurl = "https://pokeapi.co/api/v2/pokemon?limit=151";
  const nationalityurl = "https://restcountries.com/v3.1/all";

  let pokemon = [];
  let nationalities = [];

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
        let pokemonObjectArray = allpokemon.results;
        pokemonObjectArray.forEach(getName);
        //console.log(allpokemon);
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

  const inputData = {
    email: document.getElementById("input-email"),
    firstName: document.getElementById("first-name"),
    lastName: document.getElementById("last-name"),
    nationality: document.getElementById("NationalityFormControlSelect"),
    pokemon: document.getElementById("PokemonFormControlSelect"),
  };

  let playertwo = new Player();
  //This is an inefficient way of changing the value, should refactor
  inputData.email.addEventListener(
    "change",
    ({ target }) => (playertwo.email = target.value)
  );

  inputData.firstName.addEventListener(
    "change",
    ({ target }) => (playertwo.firstName = target.value)
  );

  inputData.lastName.addEventListener(
    "change",
    ({ target }) => (playertwo.lastName = target.value)
  );

  inputData.nationality.addEventListener(
    "change",
    ({ target }) => (playertwo.nationality = target.value)
  );

  inputData.pokemon.addEventListener(
    "change",
    ({ target }) => (playertwo.favouritePokemon = target.value)
  );

  // function error in console -  Cannot read properties of null
  // var form = document.querySelector("#registration-form");
  // form.addEventListener("change", function () {
  //   data.email = document.getElementById("input-email").value;
  //   data.firstName = document.getElementById("first-name").value;
  //   data.lastName = document.getElementById("last-name").value;
  //   data.favouritePokemon = document.getElementById(
  //     "PokemonFormControlSelect"
  //   ).value;
  //   data.nationality = document.getElementById(
  //     "iNationalityFormControlSelect"
  //   ).value;
  // });

  function storeUserDataInSession(userData) {
    var userObjectString = JSON.stringify(userData);
    window.sessionStorage.setItem("userObject", userObjectString);
    let example = sessionStorage.getItem("userObject");
    //console.log(JSON.stringify(example, null, 4));
  }

  document.querySelector("#register-button").addEventListener("click", (e) => {
    e.preventDefault();
    storeUserDataInSession(playertwo);
    console.log(JSON.stringify(playertwo, null, 4));
    document.location.href = "html/welcome.html";
  });
});
