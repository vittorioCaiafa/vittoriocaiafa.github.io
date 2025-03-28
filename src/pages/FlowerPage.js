export async function FlowerPage() {
  const pageContent = document.createElement("div");

  const heading = document.createElement("h1");
  heading.textContent = "🌸 La Flor del Día para mi Novia Yazmin 🌸";
  pageContent.appendChild(heading);

  const florContainer = document.createElement("div");
  florContainer.id = "flor-container";
  const img = document.createElement("img");
  img.id = "flor";
  img.src =
    "https://img.freepik.com/foto-gratis/primer-disparo-flor-morada_181624-25863.jpg?t=st=1743175252~exp=1743178852~hmac=c5dec0139e7a04f36cf1706cea97ed522c28dc58fd1654f515372880903beed0&w=1380";
  img.alt = "Flor del día";
  img.style.display = "block";
  florContainer.appendChild(img);

  pageContent.appendChild(florContainer);

  const button = document.createElement("button");
  button.textContent = "Obtener";
  button.onclick = getFlower;
  pageContent.appendChild(button);

  return pageContent;
}

function getFlower() {
  const img = document.getElementById("flor");
  img.src =
    "https://img.freepik.com/foto-gratis/primer-disparo-flor-morada_181624-25863.jpg?t=st=1743175252~exp=1743178852~hmac=c5dec0139e7a04f36cf1706cea97ed522c28dc58fd1654f515372880903beed0&w=1380";
  img.style.display = "block";
}
