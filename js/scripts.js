let pokemonlist = [
    {
        name: 'Charizard',
        types: ['Fire'],
        height: 1.7,
    },
    {
        name: "Squirtle",
        types: ['Water'],
        height: .4
    },
    {
        name: 'Blastoise',
        types: ['Water'],
        height: 1.6,
    },
    {
        name: 'Bulbasaur',
        types: ['Grass'],
        height: .7,
    },
    {
        name: 'Venasaur',
        types: ['Grass'],
        height: 2,
    }
];

for (let i = 0; i < pokemonlist.length; i++) {
    if (pokemonlist[i].height < 2.5 && pokemonlist[i].height > 1.5) {
        document.write(pokemonlist[i].name + " Wow that's big!");
    } else if (person[i].height < .5) {
        document.write(pokemonlist[i].name + " It's so cute!");
    } else {
        document.write(pokemonlist[i].name + " Congratulations!");
    }
}


