async function handleSearch(event) {
  event.preventDefault();
  const searchInput = document.getElementById("search-input");
  const searchTerm = searchInput.value;

  const apiUrl = "https://api.rawg.io/api/games";
  const apiKey = "c4878bace09e435eb6be9f69d41cec46";

  const response = await fetch(`${apiUrl}?key=${apiKey}&search=${searchTerm}`, {
    method: "GET",
  });

  const data = await response.json();
  const modalBody = document.querySelector(".modal-body");

  let searchResults = "";
  data.results.forEach((game) => {
    searchResults += `
      <div class="game-result">
        <h3>${game.name}</h3>
      </div>
    `;
  });

  modalBody.innerHTML = searchResults;

  // Display the modal
  const modal = new bootstrap.Modal(document.getElementById("helpModal"));
  modal.show();
}
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", handleSearch);
