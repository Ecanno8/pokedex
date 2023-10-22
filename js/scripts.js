let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

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

        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.classList.add("button-class");
        button.innerText = pokemon.name;
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        buttonAlert(button, pokemon);
    }
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            console.log(pokemon);
        });
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return Response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                letpokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_defualt;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }
    function buttonAlert(button, pokemon) {
        button.addEventListener('click', function (event) {
            showDetails(pokemon);
        })
    }
    return {
        add: add,
        getAll: getAll,
        loadList: loadList,
        loadDetails: loadDetails,
        addListItem: addListItem,
        showDetails: showDetails
    };
})();

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});
