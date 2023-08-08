function openModal(htmlFilePath) {
  const modal = document.getElementById("myModal");
  const modalContent = document.getElementById("modalContent");

  // Încarcă conținutul HTML în interiorul modalei
  fetch(htmlFilePath)
    .then((response) => response.text())
    .then((data) => {
      // Adaugă conținutul HTML în interiorul modalei
      modalContent.innerHTML = data;

      // Copiază stilurile din fișierul principal și adaugă-le în interiorul modalei
      const styleTags = document.querySelectorAll(
        'link[rel="stylesheet"], style'
      );
      styleTags.forEach((styleTag) => {
        const newStyleTag = styleTag.cloneNode(true);
        modalContent.appendChild(newStyleTag);
      });

      // Copiază scripturile din fișierul principal și adaugă-le în interiorul modalei
      const scriptTags = document.querySelectorAll("script");
      scriptTags.forEach((scriptTag) => {
        const newScriptTag = scriptTag.cloneNode(true);
        modalContent.appendChild(newScriptTag);
      });
    });

  // Deschide fereastra modală
  modal.style.display = "block";
}

function loadPage(pageURL) {
  window.open(pageURL, "_blank");
}
