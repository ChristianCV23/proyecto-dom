// Función para hacer scroll hacia la sección del producto
function scrollToProductSection(productName) {
    const section = document.getElementById(productName);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // Buscador de productos
  document.getElementById("search").addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const sections = document.querySelectorAll('.product-section');
    let found = false;
  
    sections.forEach(section => {
      const sectionName = section.id.toLowerCase();
      if (sectionName.includes(searchTerm)) {
        scrollToProductSection(section.id);
        found = true;
      }
    });
  
    if (!found) {
      alert("Producto no encontrado");
    }
  });
  