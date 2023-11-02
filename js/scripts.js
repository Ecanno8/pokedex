let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

    //modal container here
    let modalContainer = document.querySelector(".modal-container");

    function showModal(pokemon) {
        let modal = document.createElement("div");
        modal.classList.add("modal");


        let closeButtonElement = document.createElement("button");
        closeButtonElement.classList.add("modal-close");
        closeButtonElement.innerText = "Close";
        closeButtonElement.addEventListener("click", hideModal);

        let titleElement = document.createElement("h1");
        titleElement.innerText = 'Pokemon name' + ': ' + pokemon.name;

        let contentElement = document.createElement("p");
        contentElement.innerText = 'Pokemon height' + ': ' + pokemon.height;


        let myImage = document.createElement('img');
        myImage.src = pokemon.imageUrl;
        modal.appendChild(myImage);

        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modalContainer.appendChild(modal);
        modalContainer.classList.add("is-visible");
    }

    let dialogPromiseReject;

    function hideModal() {
        let modal = document.querySelector(".modal");
        modal.remove();

        if (dialogPromiseReject) {
            dialogPromiseReject();
            dialogPromiseReject = null;
        }
    }

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
            hideModal();
        }
    });

    modalContainer.addEventListener("click", (e) => {
        let target = e.target;
        if (target === modalContainer) {
            hideModal();
        }
    });
    ///  Ended here need to finish addlistitem, load details, show details, button listeners////
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
