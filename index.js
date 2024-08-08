// Console log a welcome message with instructions to mad libs
let welcome = ("welcome to mad libs games!")
console.log(welcome)

// Prompt the user to enter parts of speech for mad libs
// You should be asking for at least 4 words
let adjective = prompt("give me an adjective")
let verb = prompt("give me a verb")
let pluralnoun = prompt("give me a plural noun")
let adjective2 = prompt("give me another adjective")
// Create an array that stores the values the user entered
let words = [adjective,adjective2,pluralnoun,verb]


// Console log the story with the array values passed into the blanks
// Make sure you are referencing the values of the array (rather than the user inputs themselves)
// You can use any type of string manipulation that feels more intuitive

console.log( `In a small ${words[0]} school in the Bronx, there was a problem with too many  ${words[1]} . These  ${words[2]} loved to  ${words[3]}  which caused Mr. P so many headaches. However, no one wanted to remove them because they were too (4)  ${words[0]} so they stayed there forever.`)
  
  








