// Module 3 Exercise: Looping in Objects
// Start with exercise-3.md if you haven't read it!

const dominos = {
  name: "Domino's",
  cuisines: ["italian", "new york", "pizza"],
  pizzaToppings: {
    pepperoni: 2.2,
    mushrooms: 0.7,
    extraCheese: 1.4,
    onions: 0.5,
    sausage: 2.8,
    extraSauce: 0.8,
  },
  starReviews: {
    Peach: 3,
    Yoshi: 2.1,
    Bowser: 4,
    Mario: 5,
    Luigi: 5,
    Gumba564: 3.4,
    "Donkey Kong": 3.2,
  },
  favorited: true,
  address: "123 Elm Street",
  zipcode: 54321,
  acceptsReservations: true,
};

function printPizzaPlace(pizzaPlace) {
  for (let key in pizzaPlace) {
    if (typeof pizzaPlace[key] === "object") {
      console.log(`${key}:`);
      for (let subKey in pizzaPlace[key]) {
        console.log(`  ${subKey}: ${pizzaPlace[key][subKey]}`);
      }
    } else {
      console.log(`${key}: ${pizzaPlace[key]}`);
    }
  }
}

function toppingsPriceRange(pizzaPlace) {
  const { pizzaToppings } = pizzaPlace;
  let highest = -Infinity;
  let lowest = Infinity;
  for (let key in pizzaToppings) {
    if (pizzaToppings[key] > highest) {
      highest = pizzaToppings[key];
    } else if (pizzaToppings[key] < lowest) {
      lowest = pizzaToppings[key];
    }
  }
  return [highest, lowest];
}

function calculateAverageRating(pizzaPlace) {
  const { starReviews } = pizzaPlace;
  let sum = 0;
  let count = Object.keys(starReviews).length;
  for (let key in starReviews) {
    sum += starReviews[key];
  }
  return (sum / count).toFixed(2);
}

printPizzaPlace(dominos);
console.log("Toppings Price Range:", toppingsPriceRange(dominos));
console.log("Average Rating:", calculateAverageRating(dominos));
