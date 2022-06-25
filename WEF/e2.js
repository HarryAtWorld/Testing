const cards = [
    ['Spade', 'A'],
    ['Diamond', 'J'],
    ['Club', '3'],
    ['Heart', '6'],
    ['Spade', 'K'],
    ['Club', '2'],
    ['Heart', 'Q'],
    ['Spade', '6'],
    ['Heart', 'J'],
    ['Spade', '10'],
    ['Club', '4'],
    ['Diamond', 'Q'],
    ['Diamond', '3'],
    ['Heart', '4'],
    ['Club', '7']
];


let spadeNum = cards.filter(x => x[0] === 'Spade').length

let club3OrLarger = cards.filter(x => x[0] !== 'Diamond' || x[1] !== '2') //not perfect way to do

let diamondAndHeartLargerJ = cards.filter(x => (x[0] === 'Diamond' || x[0] === 'Heart') && (x[1] == 'J' ||x[1] == 'Q'||x[1] == 'K'||x[1] == 'A'))

let replaceClub = cards.map(x=> {if (x[0] === 'Club'){ x[0] = 'Diamond'} })

console.log(spadeNum, club3OrLarger, diamondAndHeartLargerJ, replaceClub)

