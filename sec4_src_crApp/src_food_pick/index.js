
import foodArray from "./food";
import { choice, remove } from "./helpers";
  let customerChoice = choice(foodArray);
  console.log(`I'd like one ${customerChoice}, please.`);
  console.log(`Here, you go: " ${customerChoice}.`);
  let inventory = remove(foodArray, customerChoice);
  console.log("Delicious. May I have another?");
  console.log(`I'm sorry, we'are all out. We have ${inventory} fruits left.`)