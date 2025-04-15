document.addEventListener("DOMContentLoaded", () => {
  fetch("../../data.json") // Adjust path if needed
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("status-cards");

      data.forEach(item => {
        const card = document.createElement("div");
        card.className = "col-md-3";

        card.innerHTML = `
          <div class="status-card">
            <h5>${item.title}</h5>
            <div class="count">${item.count}</div>
          </div>
        `;

        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Error loading status cards:", error);
    });
});
