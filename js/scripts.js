let pokemonRepository = (function () {
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
    ]

    function getAll() {
        return pokemonList;
    }

    function add(pokemon)
    if (typeof pokemon === 'object' &&
        "name" in pokemon &&
        "types" in pokemon &&
        "height" in pokemon) {
        pokemonList.push(pokemon);
    } else { console.log("pokemon is not correct"); }

    function addv(pokemon) {
        let expectedKeys = ['name', 'height', 'types'];
        let actualKeys = Object.keys(pokemon);
        if (typeof pokemon === 'object' && actualKeys.length === expectedKeys.length && expectedKeys.every(index => {
            actualKeys.includes(index)
        })) { pokemonList.push(pokemon); }

        else { console.log("Invalid data.") }
    }
    function findPokemonByName(minLength) {
        return pokemonRepository.getAll().filter(pokemon => pokemon.name.length > minlength);
    }

    return {
        add: add,
        addv: addv,
        getAll: getAll,
        findPokemonByName: findPokemonByName,
    }
})();





//change this to a for each statement//
for (let i = 0; i < pokemonlist.length; i++) {
    if (pokemonlist[i].height < 2.5 && pokemonlist[i].height > 1.5) {
        document.write(pokemonlist[i].name + pokemonlist[i].height + " Wow that's big!");
    } else if (pokemonlist[i].height < .5) {
        document.write(pokemonlist[i].name + pokemonlist[i].height + " It's so cute!");
    } else {
        document.write(pokemonlist[i].name + pokemonlist[i].height + " Congratulations!");
    }
};

//work under for each and get all loop array//
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (item, index) {
    document.write('<p> ${pokemon.name}');
})