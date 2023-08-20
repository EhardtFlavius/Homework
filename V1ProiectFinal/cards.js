document.addEventListener("DOMContentLoaded", () => {
  const activePanels = JSON.parse(localStorage.getItem("activePanels")) || [];
  const panels = document.querySelectorAll(".panel");

  activePanels.forEach((index) => {
    panels[index].classList.add("active");
  });
});

function togglePanel(panel) {
  panel.classList.toggle("active");

  const panels = document.querySelectorAll(".panel");
  const activePanels = Array.from(panels)
    .map((panel, index) => (panel.classList.contains("active") ? index : null))
    .filter((index) => index !== null);

  localStorage.setItem("activePanels", JSON.stringify(activePanels));
}
