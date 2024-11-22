const inputName = document.querySelector(".nom");
const inputPrenom = document.querySelector(".prenom");
const inputAge = document.querySelector(".age");
const select = document.querySelector("select");
const form = document.querySelector("form");

let nom = "";
let prenom = "";
let age = "";
let animal = "";

// ____[nom]_____________________________________
inputName.addEventListener("input", e => {
  //   console.log(e.target.value);
  nom = e.target.value;
  console.log(nom);
});
// ____[prenom]_____________________________________
inputPrenom.addEventListener("input", e => {
  prenom = e.target.value;
  //   console.log(prenom);
});

// ____[age]_____________________________________
inputAge.addEventListener("input", e => {
  //   console.log(e.target.value);
  age = e.target.value;
  console.log(age);
});

// ____[animal]_____________________________________
select.addEventListener("input", e => {
  //   console.log(e.target.value);
  animal = e.target.value;
  console.log(animal);
});

// ____[formulaire]_____________________________________

form.addEventListener("submit", e => {
  e.preventDefault();

  if (cgv.checked) {
    document.querySelector("form > .info").innerHTML = `
    <h3>Nom : ${nom} </h3>
    <h3>Prenom : ${prenom} </h3>
    <h3>Age : ${age} </h3>
    <h4>Animal : ${animal} </h4>
    
    `;
  } else {
    alert("Veuillez cocher les CGV");
  }
});
