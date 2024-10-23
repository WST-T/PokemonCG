const colorType = {
  "grass": "#C7DCA7",
  "fire": "#FF8080",
  "bug": "#79AC78",
  "normal": "#BFB29E",
  "fighting": "#A86464",
  "water": "#82A0D8",
  "ice": "#C4DFDF",
  "flying": "#D0BFFF",
  "poison": "#804674",
  "electric": "#FFD966",
  "ground": "#EDDBC7",
  "fairy": "#F2D8D8",
  "psychic": "#FF8DC7",
  "rock": "#C7BCA1",
  "ghost": "#A68DAD",
  "dark": "#867070",
  "steel": "#B7C4CF",
  "dragon": "#B2A4FF",
}

async function GeneratePokemon() {
  const pokemonID = Math.floor((Math.random() * 151) + 1);
  const reponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
  const Pokemon = await reponse.json();
  const pokemonHP = Pokemon.stats[0].base_stat
  const pokemonAttack = Pokemon.stats[1].base_stat
  const pokemonDefense = Pokemon.stats[2].base_stat
  const pokemonSpeed = Pokemon.stats[5].base_stat
  const pokemonName = Pokemon.name
  const pokemonArtwork = Pokemon.sprites.other.dream_world.front_default
  const pokemonTypes = Pokemon.types

  document.getElementById("HP").innerHTML = pokemonHP;
  document.getElementById("Attack").innerHTML = pokemonAttack;
  document.getElementById("Defense").innerHTML = pokemonDefense;
  document.getElementById("Speed").innerHTML = pokemonSpeed;
  document.getElementById("Name").innerHTML = pokemonName;
  document.getElementById("Artwork").src = pokemonArtwork;
  document.getElementById("type1").innerHTML = pokemonTypes[0].type.name;
  document.getElementById("card").style.background = `radial-gradient(circle at 50% 0%, ${colorType[pokemonTypes[0].type.name]} 45%, #f8f8e5 40%)`;
  document.getElementById("card").style.boxShadow = `5px 5px 20px ${colorType[pokemonTypes[0].type.name]}`;
  if (pokemonTypes.length === 2) {
      document.getElementById("type2").innerHTML = pokemonTypes[1].type.name;
      document.getElementById("type2").style.backgroundColor = colorType[pokemonTypes[1].type.name];
      document.getElementById("type2").hidden = false
  }
  else {
      document.getElementById("type2").hidden = true
  }
  document.getElementById("type1").style.backgroundColor = colorType[pokemonTypes[0].type.name];
}

GeneratePokemon()
