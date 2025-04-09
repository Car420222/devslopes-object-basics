/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //

const SuperTaqueria = {
  name: "Super Taqueria",
  cuisines: ["Mexican", "Tex-Mex"],
  numberOfStars: 5,
  favorited: true,
};

SuperTaqueria.address = "123 Main Street";
SuperTaqueria.zipcode = 95076;
SuperTaqueria.acceptsReservations = false;

SuperTaqueria.numberOfStars += 1;
SuperTaqueria.favorited = false;
SuperTaqueria.cuisines.push("Vegan");

console.log(SuperTaqueria);

function retrieveProperty(key, obj) {
  if (key in obj) {
    return obj[key];
  } else {
    return "The information you requested does not exist.";
  }
}

console.log(retrieveProperty("cuisines", SuperTaqueria));
console.log(retrieveProperty("favorited", SuperTaqueria));
console.log(retrieveProperty("name", SuperTaqueria));
console.log(retrieveProperty("nickName", SuperTaqueria));
console.log(retrieveProperty("state", SuperTaqueria));
