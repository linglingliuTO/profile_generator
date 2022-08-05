const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)\n", (userName) => {
  rl.question("What's an activity you like doing?\n", (activity) => {
    rl.question("What do you listen to while doing that?\n", (music) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)\n", (faveMeal) => {
        rl.question("What's your favourite thing to eat for that meal?\n", (foodMeal) => {
           rl.question("Which sport is your absolute favourite?\n", (faveSport ) => { 
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!\n", (superPower ) => {
    console.log(`${userName} love listening to ${music} while ${activity}, devouring ${foodMeal} for ${faveMeal}, prefers ${faveSport} over any other sports, and is amazing at ${superPower}`);
    rl.close();
            })
          });
        })
      })
    })
  })
})


/*const activity= await rl.question("What's an activity you like doing?"); 
const music = await rl.question("What do you listen to while doing that?"); 
const faveMeal = await rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)"); 
const foodMeal = await rl.question("What's your favourite thing to eat for that meal?"); 
const faveSport = await rl.question("Which sport is your absolute favourite?"); 
const superPower = await rl.question("What is your superpower? In a few words, tell us what you are amazing at!"); 


console.log(`${userName} love listening to ${music} while ${activity}, devouring ${foodMeal} for ${faveMeal}, prefers ${faveSport} over any other sports, and is amzing at ${superPower}`);


console.log(`${userName} love listening `);

rl.close();
*/


