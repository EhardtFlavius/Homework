// Generic Function get Url
async function fetchData(url) {
  var response = await fetch(url);
  var data = await response.json();
  return data;
}

// Function that can GET all characters or a single character
async function getCharacters(characterId = "") {
  var url = `https://rickandmortyapi.com/api/character/${characterId}`;
  return await fetchData(url);
}

async function getLocations(locationId = "") {
  var url = `https://rickandmortyapi.com/api/location/${locationId}`;
  return await fetchData(url);
}

async function getEpisodes(episodeId = "") {
  var url = `https://rickandmortyapi.com/api/episode/${episodeId}`;
  return await fetchData(url);
}

function addCharacterEventListeners() {
  var btnAllCharacters = document.getElementById("btnAllCharacters");
  var btnCharacter1 = document.getElementById("btnCharacter1");
  var btnCharacter2 = document.getElementById("btnCharacter2");
  var btnCharacter3 = document.getElementById("btnCharacter3");

  btnAllCharacters.addEventListener("click", async () => {
    var characters = await getCharacters();
    displayCharacters(characters.results);
  });

  btnCharacter1.addEventListener("click", async () => {
    var character = await getCharacters(1);
    displayCharacters([character]);
  });

  btnCharacter2.addEventListener("click", async () => {
    var character = await getCharacters(2);
    displayCharacters([character]);
  });

  btnCharacter3.addEventListener("click", async () => {
    var character = await getCharacters(3);
    displayCharacters([character]);
  });
}

function displayCharacters(characters) {
  var charactersContainer = document.getElementById("charactersContainer");
  charactersContainer.innerHTML = "";

  characters.forEach((character) => {
    var characterDiv = document.createElement("div");
    characterDiv.innerHTML = `
      <strong>Name:</strong> ${character.name}<br>
      <strong>Status:</strong> ${character.status}<br>
      <strong>Species:</strong> ${character.species}<br>
      <strong>Gender:</strong> ${character.gender}<br>
    `;
    charactersContainer.appendChild(characterDiv);
    console.log(character);
  });
}
// function that can GET all locations or a single location
function addLocationEventListeners() {
  var btnAllLocations = document.getElementById("btnAllLocations");
  var btnLocation1 = document.getElementById("btnLocation1");
  var btnLocation2 = document.getElementById("btnLocation2");
  var btnLocation3 = document.getElementById("btnLocation3");

  btnAllLocations.addEventListener("click", async () => {
    var locations = await getLocations();
    displayLocations(locations.results);
  });

  btnLocation1.addEventListener("click", async () => {
    var location = await getLocations(1);
    displayLocations([location]);
  });

  btnLocation2.addEventListener("click", async () => {
    var location = await getLocations(2);
    displayLocations([location]);
  });

  btnLocation3.addEventListener("click", async () => {
    var location = await getLocations(3);
    displayLocations([location]);
  });
}

function displayLocations(locations) {
  var locationsContainer = document.getElementById("locationsContainer");
  locationsContainer.innerHTML = "";

  locations.forEach((location) => {
    var locationDiv = document.createElement("div");
    locationDiv.innerHTML = `
      <strong>Name:</strong> ${location.name}<br>
      <strong>Type:</strong> ${location.type}<br>
      <strong>Dimension:</strong> ${location.dimension}<br>
    `;
    locationsContainer.appendChild(locationDiv);
    console.log(locations);
  });
}

// function that can GET all episodes or a single episode
function addEpisodeEventListeners() {
  var btnAllEpisodes = document.getElementById("btnAllEpisodes");
  var btnEpisode1 = document.getElementById("btnEpisode1");
  var btnEpisode2 = document.getElementById("btnEpisode2");
  var btnEpisode3 = document.getElementById("btnEpisode3");

  btnAllEpisodes.addEventListener("click", async () => {
    var episodes = await getEpisodes();
    displayEpisodes(episodes.results);
  });

  btnEpisode1.addEventListener("click", async () => {
    var episode = await getEpisodes(1);
    displayEpisodes([episode]);
  });

  btnEpisode2.addEventListener("click", async () => {
    var episode = await getEpisodes(2);
    displayEpisodes([episode]);
  });

  btnEpisode3.addEventListener("click", async () => {
    var episode = await getEpisodes(3);
    displayEpisodes([episode]);
  });
}

function displayEpisodes(episodes) {
  var episodesContainer = document.getElementById("episodesContainer");
  episodesContainer.innerHTML = "";

  episodes.forEach((episode) => {
    var episodeDiv = document.createElement("div");
    episodeDiv.innerHTML = `
      <strong>Name:</strong> ${episode.name}<br>
      <strong>Air Date:</strong> ${episode.air_date}<br>
      <strong>Episode:</strong> ${episode.episode}<br>
    `;
    episodesContainer.appendChild(episodeDiv);
    console.log(episodes);
  });
}

document.addEventListener("DOMContentLoaded", addCharacterEventListeners);
document.addEventListener("DOMContentLoaded", addLocationEventListeners);
document.addEventListener("DOMContentLoaded", addEpisodeEventListeners);
