
// Brings in the variable 'nameoptions' from the textarea item in HTML
const nameoptions = document.getElementById('textArea')
// Brings in the variable 'namebox' from the span element in the HTML (where the names are displayed)
const namebox = document.getElementById('boxResult')
// Brings in the button with ID 'genButton'
const genbutton = document.getElementById('genButton')

// Listens for a keyup event in nameoptions and when it fires, runs the create array function with its value.
nameoptions.addEventListener('keyup', (event) => {
    if(event.key === 'Enter') {
        createArray(event.target.value)
    }
    })
// Listens for a mouseup event on the genbutton variable. When it does, it runs the createArray function
    genbutton.addEventListener('mouseup',(event => {
        createArray(nameoptions.value)
    }
        ))


function createArray(input) {
    // makes a variable of players and splits the input with a comma. Following not understood.
    const players = input.split(',').filter(players => players.trim()!=='').map(players => players.trim())
    // sorts the player array with a comparison function (denoted by the function(a,b)). It then returns each elements comparison between 0.5 - a random integer between 0 and 1.
    players.sort(function(a, b){return 0.5 - Math.random()});
    // slices the new array to include the first half of elements (it stops at the player.length/2 index of that array)
    let finalTeam = players.slice(0,(((players.length))/2))
    // Changes the inner HTML of the namebox element to the array players
    namebox.innerHTML = finalTeam
    }