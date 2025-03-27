document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:4000/api/pokemon')
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById('pokemon-list');
            data.results.forEach(pokemon => {
                const item = document.createElement('li');
                item.textContent = pokemon.name;
                item.addEventListener('click', () => getPokemonDetails(pokemon.name));
                list.appendChild(item);
            });
        });
});

function getPokemonDetails(name) {
    fetch(`http://localhost:4000/api/pokemon/${name}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('pokemon-details').innerHTML = `
                <h2>${data.name}</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p>Peso: ${data.weight} | Altura: ${data.height}</p>
            `;
        });
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./frontend/public/sw.js')
    console.log("hijueputa")
        .then(() => console.log('Service Worker registrado'))
        .catch(error => console.log('Error en SW:', error));
}
