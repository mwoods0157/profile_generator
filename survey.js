const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What do you think of Node.js? ', (answer) => {
    rl.question("What's your name?", (name) => {
        rl.question("What's an activity you like doing?", (activity) => {
            rl.question("what do you list to while doing that?", (music) => {
                rl.question("Which meal is your favorite?", (meal) => {
                    rl.question("What's your favorite thing to eat for that meal?", (food) => {
                        rl.question("Which sport is your favorite?", (sport) => {
                            rl.question("What is your superpower?", (power) => {
                            console.log(`Thank you for your valuable feedback: ${answer} ${name}. You like doing ${activity} while listening to ${music}. Your favorite meal is ${meal} and food is ${food}. I like to play ${sport} and my superpower is ${power}`);
                            rl.close();
                            })
                        })
                    })
                })
            })
        })    
    })
});

