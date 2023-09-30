let pokemonRepository = (function () {
    let repository = [
        {
            name: "Bulbasaur",
            height: 0.7,
            types: ["grass", "poison"],
        },
        {
            name: "Charizard",
            height: 1.7,
            types: ["fire", "flying"],
        },
        {
            name: "Squirtle",
            height: 1,
            types: ["water"],
        },
    ];

    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon &&
            "height" in pokemon &&
            "types" in pokemon
        ) {
            repository.push(pokemon);
        } else {
            console.log("pokemon is not correct");
        }

        function addv(pokemon) {
            let expectedKeys = ['name', 'height', 'types'];
            let actualKeys = Object.keys(pokemon);

            if (typeof pokemon === 'object' && actualKeys.length === expectedKeys.length && expectedKeys.every(index => {
                actualKeys.includes(index)
            })) {
                pokemonList.push(pokemon);
            } else {
                console.log("Invalid data. Only non empty objects with expected keys can be added");
            }
        }
    }
    function getAll() {
        return repository;
    }
    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        buttonAlert(button, pokemon);
    }
    function showDetails(pokemon) {
        console.log(pokemon);
    }
    function buttonAlert(button, pokemon) {
        button.addEventListener('click', function (event) {
            showDetails(pokemon);
        })
    }
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
})();

pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});
