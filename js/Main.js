// the function which handles the input field logic
function getUserAdajective() {
    var inputField = document.getElementById('inputField').value;
    var result = document.getElementById('result');
}

// Store the input field in Arrays



var subButton = document.getElementById('subButton');
subButton.addEventListener('click', getUserMadLib, false);


// Result OR Print Out Mad Lib
function getUserMadLib(){
    var madlib = document.getElementById('madlib');

    const result = (`Today I went to the zoo. I saw a ${adajective[0]}${noun[0]} jumping up and down in its tree. He ${verb[0]}${adverb[0]} through the large tunnel that led to its ${adajective[1]}${noun[1]}. I got some peanuts and passed them through the cage to a gigantic gray ${noun[2]} towering above my head. Feeding that animal made me hungry. I went to get a ${adajective[2]} scoop of ice cream. It filled my stomach. Afterwards I had to ${verb[1]}${adverb[1]} to catch our bus. When I got home I ${verb[2]} my mom for a ${adajective[3]} day at the zoo.`)

    madlib.textContent = result;
}