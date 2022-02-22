function createSculptre({ name, avatar }) {
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    container.innerHTML = `<img class="flag" src=${avatar}>
  <div class="info">
  <h2>${name}</h2
  </div>`;
    document.body.append(container);
}
fetch("https://621394c689fad53b1ff9c4b9.mockapi.io/users")
    .then(data => data.json())
    .then((sculptres) => {
        sculptres.forEach((sculptre) => {
            const newSculptre = {
                name: sculptre.name,
                avatar: sculptre.avatar,
            };
            createSculptre(newSculptre);
        });
    });