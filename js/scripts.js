let pokemonlist = [
    {
        name: 'Charizard',
        types: ['Fire'],
        height: 1.7,
    },
    {
        name: 'Blastoise',
        types: ['Water'],
        height: 1.6,
    },
    {
        name: 'Venasaur',
        types: ['Grass'],
        height: 2,
    }
];

for (let i = 0; i < pokemonlist.length; i++) {
    if (pokemonlist[i].height < 2.5 && pokemonlist[i].height > 1.5) {
        console.log(pokemonlist[i].name + " Wow that's big!");
    } else if (person[i].height < .5) {
        console.log(pokemonlist[i].name + " It's so cute!");
    } else {
        console.log(pokemonlist[i].name + " Congratulations!");
    }
}


