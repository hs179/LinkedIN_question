function greet(greeting, punctuation) {
  return (`${greeting}, ${this.name}${punctuation}`);
}

const user1 = { name: "Alice" };
const user2 = { name: "Bob" };

// Using call()
console.log(greet.call(user1, "Hello", "!"));              // Hello, Alice!
console.log(greet.call(user2, "Hi", "??"));                // Hi, Bob??

// Using apply()
console.log(greet.apply(user1, ["Hey", "!!!"]));           // Hey, Alice!!!
console.log(greet.apply(user2, ["Welcome", "."]));         // Welcome, Bob.

// Using bind()
const greetAlice = greet.bind(user1);
console.log(greetAlice("Good morning", "~"));               // Good morning, Alice~

const greetBob = greet.bind(user2, "Howdy");
console.log(greetBob("!")); // Howdy, Bob!