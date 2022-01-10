// Declaro las variables que voy a necesitar
const carrito = document.querySelector('#carrito');
const listaProductos = document.querySelector('#lista-productos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
let articulosCarrito = [];

// Funciones que se van a ejecutar cuando se efectuen los eventos al apretar los botones de "agregar al carrito"
cargarEventListeners();

function cargarEventListeners() {
     // Se va a ejecutar cuando se presiona "Agregar al Carrito"
     listaProductos.addEventListener('click', agregarProducto);

     // Cuando se elimina un curso del carrito
     carrito.addEventListener('click', eliminarProducto);

     // Al Vaciar el carrito
     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}

// Función que va a añadir el producto al carrito
function agregarProducto(e) {
     e.preventDefault();
     // Delegacion para agregar al carrito
     if(e.target.classList.contains('agregar-carrito')) {
          const producto = e.target.parentElement.parentElement;
          // Envio el producto seleccionado para luego leer sus datos
          leerDatosProducto(producto);
     }
}

// Lee los datos del producto
function leerDatosCurso(producto) {
     const infoProducto = {
          imagen: producto.querySelector('img').src,
          titulo: producto.querySelector('h4').textContent,
          precio: producto.querySelector('.precio span').textContent,
          id: producto.querySelector('a').getAttribute('data-id'), 
          cantidad: 1
     }


     if( articulosCarrito.some( producto => producto.id === infoProducto.id ) ) { 
          const producto = articulosCarrito.map( producto => {
               if( producto.id === infoProducto.id ) {
                    producto.cantidad++;
                     return producto;
                } else {
                     return producto;
             }
          })
          articulosCarrito = [...producto];
     }  else {
          articulosCarrito = [...articulosCarrito, infoProducto];
     }

     // console.log(articulosCarrito)
     carritoHTML();
}

// Eliminar el producto del carrito en el DOM
