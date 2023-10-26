// Three Arrays Containing Verbs, Adjectives and Nouns

const verbs = ['Drink Tea', 'Go Skiing', 'Do Shopping'];
const adjectives = ['Joyfully', 'Masterfully', 'Energetically'];
const nouns = ['In London', 'In Zermat', 'In New York'];

// Generate Word From All Three Arrays
// Thus Generating A Final Completed Message

for (let i = 0; i < Array.length; i++) {
    let randomVerb = Math.floor(Math.random() * 4);
    switch (randomVerb) {
        case 1: 
            console.log('Drink Tea');
            break;
        case 2: 
            console.log('Go Skiing');
            break;
        case 3:
            console.log('Do Shopping');
            break;
        default:
            console.log('Float...');
            break;
    }
}

for (let i = 0; i < Array.length; i++) {
    let randomAdj = Math.floor(Math.random() * 4);
    switch (randomAdj) {
        case 1: 
            console.log('Joyfully');
            break;
        case 2: 
            console.log('Masterfully');
            break;
        case 3:
            console.log('Energetically');
            break;
        default:
            console.log('Surprisingly');
            break;
    }
}

for (let i = 0; i < Array.length; i++) {
    let randomNoun = Math.floor(Math.random() * 4);
    switch (randomNoun) {
        case 1: 
            console.log('In London');
            break;
        case 2: 
            console.log('In Zermat');
            break;
        case 3:
            console.log('In New York');
            break;
        default:
            console.log('In Space');
            break;
    }
}




