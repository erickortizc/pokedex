const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
            
            let pokname = data.name;
            console.log(pokname);
            pokenames(pokname);

            let poketype = data.types[0].type.name;
            console.log(poketype);
            pokeType(poketype);

            let pokeStatshp =data.stats[0].base_stat;
            console.log(pokeStatshp);
            pokeStatHP(pokeStatshp);
            let pokeStatsattach =data.stats[1].base_stat;
            console.log(pokeStatsattach);
            pokeStatAttach(pokeStatsattach);
            let pokeStatsdefed =data.stats[2].base_stat;
            console.log(pokeStatsdefed);
            pokeStatdefend(pokeStatsdefed);
            let pokeStatsspatt =data.stats[3].base_stat;
            console.log(pokeStatsspatt);
            pokeStatspatt(pokeStatsspatt);
            let pokeStatsspdef =data.stats[4].base_stat;
            console.log(pokeStatsspdef);
            pokeStatspdefend(pokeStatsspdef);
            let pokeStatsvel =data.stats[5].base_stat;
            console.log(pokeStatsvel);
            pokeStatvel(pokeStatsvel);

            let pokemove1 = data.moves[0].move.name;
            console.log(pokemove1);
            pokeMove1(pokemove1);
            let pokemove2 = data.moves[1].move.name;
            console.log(pokemove2);
            pokeMove2(pokemove2);
            let pokemove3 = data.moves[2].move.name;
            console.log(pokemove3);
            pokeMove3(pokemove3);
            let pokemove4 = data.moves[3].move.name;
            console.log(pokemove4);
            pokeMove4(pokemove4);
            let pokemove5 = data.moves[4].move.name;
            console.log(pokemove5);
            pokeMove5(pokemove5);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const pokenames =(name) =>
{
    const pokenm = document.getElementById("pokenames");
    pokenm.innerHTML = name;
}
const pokeType = (name) => {
    const poketipo = document.getElementById("pokeTypeid");
    poketipo.innerHTML = name;
}
const pokeStatHP = (stat) => {
    const pokeStat = document.getElementById("pokemonhp");
    pokeStat.innerHTML = stat;
}
const pokeStatAttach = (stat) => {
    const pokeStat = document.getElementById("pokemonAttach");
    pokeStat.innerHTML = stat;
}
const pokeStatdefend = (stat) => {
    const pokeStat = document.getElementById("pokemondefense");
    pokeStat.innerHTML = stat;
}
const pokeStatspatt = (stat) => {
    const pokeStat = document.getElementById("pokemonspatt");
    pokeStat.innerHTML = stat;
}
const pokeStatspdefend = (stat) => {
    const pokeStat = document.getElementById("pokemonspdef");
    pokeStat.innerHTML = stat;
}
const pokeStatvel = (stat) => {
    const pokeStat = document.getElementById("pokemonspeed");
    pokeStat.innerHTML = stat;
}
const pokeMove1 = (move) => {
    const pokemove = document.getElementById("move1");
    pokemove.innerHTML = '1.- ' + move;
}
const pokeMove2 = (move) => {
    const pokemove = document.getElementById("move2");
    pokemove.innerHTML = '2.- ' + move;
}
const pokeMove3 = (move) => {
    const pokemove = document.getElementById("move3");
    pokemove.innerHTML = '3.- ' + move;
}
const pokeMove4 = (move) => {
    const pokemove = document.getElementById("move4");
    pokemove.innerHTML = '4.- ' + move;
}
const pokeMove5 = (move) => {
    const pokemove = document.getElementById("move5");
    pokemove.innerHTML = '5.- ' + move;
}