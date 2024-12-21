// Reemplaza 'YOUR_API_KEY' con tu clave de Pixabay
const API_KEY = '46709131-2885d64196ea1f0ebfcbd7c03';
const API_URL = 'https://pixabay.com/api/';

async function searchImages() {
  const query = document.getElementById("search-input").value.trim();

  if (query === "") {
    alert("Por favor, ingresa un término de búsqueda");
    return;
  }

  try {
    const response = await fetch(`${API_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo`);

    if (!response.ok) throw new Error("Error en la solicitud");

    const data = await response.json();
    displayImages(data.hits);
  } catch (error) {
    console.error("Error al obtener las imágenes:", error);
    alert("Ocurrió un problema al obtener las imágenes. Inténtalo nuevamente.");
  }
}

function displayImages(images) {
  const container = document.getElementById("images-container");
  container.innerHTML = ""; // Limpiar el contenedor de imágenes

  images.forEach(image => {
    const imgDiv = document.createElement("div");
    imgDiv.className = "image-item";

    const img = document.createElement("img");
    img.src = image.webformatURL;
    img.alt = image.tags;

    imgDiv.appendChild(img);
    container.appendChild(imgDiv);
  });
}