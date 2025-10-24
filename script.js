const productos = [
    {
      nombre: 'Figura de Colección Usagi Reloj',
      descripcion: 'Figura de colección personaje de serie Chiikawa (incluye reloj funcional)',
      precio: 599.99,
      imagen: 'usagi (1).jpg'
    },
    {
      nombre: 'Figura de Colección Hachiware Reloj',
      descripcion: 'Figura de colección personaje de serie Chiikawa (incluye reloj funcional)',
      precio: 499.99,
      imagen: 'hachi.jpg'
    },
    {
      nombre: 'Figura de Colección Chiikawa Reloj',
      descripcion: 'Figura de colección personaje de serie Chiikawa (incluye reloj funcional)',
      precio: 499.00,
      imagen: 'chikawa.jpg'
    },
    {
      nombre: 'Figura de Colección Chiikawa Exclusiva',
      descripcion: 'Figura exclusiva de colección personaje de serie Chiikawa',
      precio: 899.99,
      imagen: 'chiikawa especial.jpg'
    }
  ];
  
  const catalogo = document.getElementById('catalogo');
  
  function crearTarjetaProducto(producto) {
    const card = document.createElement('article');
    card.className = 'producto-card';
  
    const imagen = document.createElement('img');
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;
    imagen.loading = 'lazy';
  
    const titulo = document.createElement('h2');
    titulo.textContent = producto.nombre;
  
    const descripcion = document.createElement('p');
    descripcion.textContent = producto.descripcion;
  
    const precio = document.createElement('div');
    precio.className = 'precio';
    precio.textContent = `$${producto.precio.toFixed(2)}`;
  
    const boton = document.createElement('button');
    boton.className = 'btn-comprar';
    boton.textContent = 'Comprar';
    boton.addEventListener('click', () => {
      alert(`Has añadido "${producto.nombre}" al carrito (precio: $${producto.precio.toFixed(2)})`);
    });
  
    card.append(imagen, titulo, descripcion, precio, boton);
    return card;
  }
  
  function renderizarCatalogo() {
    catalogo.innerHTML = '';
    productos.forEach(producto => {
      const tarjeta = crearTarjetaProducto(producto);
      catalogo.appendChild(tarjeta);
    });
  }
  
  window.addEventListener('DOMContentLoaded', renderizarCatalogo);
  