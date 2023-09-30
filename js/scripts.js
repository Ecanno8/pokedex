var pokemonRepository = (function () {
    let pokemonList = [
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

    function add(pokemon)
    if
        (typeof pokemon === 'object' &&
        "name" in pokemon &&
        "types" in pokemon &&
        "height" in pokemon) {
        pokemonList.push(pokemon);
    } else { console.log("pokemon is not correct"); }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        addv: addv,
        getAll: getAll,
    };
})();


//work under for each and get all loop array//
console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
    let pokemonList = document.querySelector("pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = "pokemon.name";
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);

});