document.addEventListener("DOMContentLoaded", () => {
  let x = window.sessionStorage.getItem("userObject");

  let playerData = JSON.parse(x);

  console.log(JSON.stringify(playerData, null, 4));

  // refactor the code below

  let tableFirst = document.getElementById("new-first");
  let tableLast = document.getElementById("new-last");
  let tablePokemon = document.getElementById("new-poke");
  let tableNationality = document.getElementById("new-nationality");
  let tablePoints = document.getElementById("new-points");

  tableFirst.innerHTML = playerData.firstName;
  tableLast.innerHTML = playerData.lastName;
  tablePokemon.innerHTML = playerData.favouritePokemon;
  tableNationality.innerHTML = playerData.nationality;
  tablePoints.innerHTML = 0;

  //Todo
  //When sorting the table the playerdata disappears
});
