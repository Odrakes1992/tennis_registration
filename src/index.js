document.addEventListener("DOMContentLoaded", () => {
  console.log("Happy Days the Dom is working!");

  const pokemonurl = "https://pokeapi.co/api/v2/pokemon?limit=151";
  const nationalityurl = "https://restcountries.com/v3.1/all";

  let pokemon = [];
  let nationalities = [];

  let data = {
    firstName: "",
    lastName: "",
    email: "",
    favouritePokemon: "Pika",
    nationality: "",
  };

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

  // function logData(data) {
  //   console.log(JSON.stringify(data, null, 4));
  // }

  function getValue(x) {
    //let x = document.getElementById("#input-email").value;
    console.log(x);
  }

  let x = document.getElementById("#first-name");
  var xVal = "";
  if (x) {
    xVal = x.value;
  }

  const inputData = {
    email: document.getElementById("input-email"),
    firstName: document.getElementById("first-name"),
    lastName: document.getElementById("last-name"),
    nationality: document.getElementById("NationalityFormControlSelect"),
    pokemon: document.getElementById("PokemonFormControlSelect"),
  };

  //This is an inefficient way of changing the value, should refactor
  inputData.email.addEventListener(
    "change",
    ({ target }) => (data.email = target.value)
  );

  inputData.firstName.addEventListener(
    "change",
    ({ target }) => (data.firstName = target.value)
  );

  inputData.lastName.addEventListener(
    "change",
    ({ target }) => (data.lastName = target.value)
  );

  inputData.nationality.addEventListener(
    "change",
    ({ target }) => (data.nationality = target.value)
  );

  inputData.pokemon.addEventListener(
    "change",
    ({ target }) => (data.favouritePokemon = target.value)
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

  document.querySelector("#register-button").addEventListener("click", (e) => {
    e.preventDefault();
    document.location.href = "html/welcome.html";
    console.log(JSON.stringify(data, null, 4));
  });
});
