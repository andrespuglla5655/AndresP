// Función para controlar la apertura y cierre de los submenús
function toggleDropdown(menuId) {
    const menu = document.getElementById(menuId);
    
    // Alterna la clase 'open' que muestra o esconde el submenú
    menu.classList.toggle('open');
    
    // Cambiar la dirección de la flecha
    const icon = event.target.querySelector('i:last-child');
    icon.classList.toggle('fa-chevron-up');
    icon.classList.toggle('fa-chevron-down');
  }
  