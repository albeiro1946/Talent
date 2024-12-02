
let productos = [
    {codigo: "Por1001", nombre: "Portátil Lenovo IdeaPad 3", descripcion: "Intel Core i5, 8GB RAM, 256GB SSD, pantalla 15.6\"", precio: 2400000},
    {codigo: "Por1002", nombre: "Portátil Dell Inspiron 15", descripcion: "Intel Core i7, 16GB RAM, 512GB SSD, pantalla 15.6\"", precio: 3500000},
    {codigo: "Por1003", nombre: "Portátil HP Pavilion x360", descripcion: "Intel Core i5, 8GB RAM, 512GB SSD, pantalla táctil 14\"", precio: 3200000},
    {codigo: "Tec2001", nombre: "Teclado Logitech K120", descripcion: "Teclado alámbrico con diseño ergonómico y teclas silenciosas", precio: 55000},
    {codigo: "Tec2002", nombre: "Teclado Mecánico Redragon Kumara K552", descripcion: "Teclado mecánico compacto, retroiluminación RGB", precio: 185000},
    {codigo: "Tec2003", nombre: "Teclado Inalámbrico Microsoft Bluetooth Keyboard", descripcion: "Diseño minimalista, conectividad Bluetooth, teclas silenciosas", precio: 210000},
    {codigo: "Mou3001", nombre: "Mouse Logitech M185", descripcion: "Mouse inalámbrico, diseño compacto, batería de larga duración", precio: 65000},
    {codigo: "Mou3002", nombre: "Mouse Razer DeathAdder Essential", descripcion: "Mouse para gaming, sensor óptico de alta precisión, diseño ergonómico", precio: 185000},
    {codigo: "Mou3003", nombre: "Mouse Inalámbrico Microsoft Modern Mobile Mouse", descripcion: "Diseño delgado, conectividad Bluetooth, compatible con múltiples sistemas", precio: 130000}
];

let carrito = []; // Array para almacenar los productos en el carrito
let resultado =  []
const formatearPrecio = (precio) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(precio);

function cargar(resultado) {
    const criterio = document.getElementById('criterio').value.toLowerCase().trim();
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (!criterio) {
        resultado.innerHTML = '<p>No se encontraron productos. Por favor, ingresa un criterio de búsqueda.</p>';
        return;
    }

    const filtrados = productos.filter(p => 
        p.nombre.toLowerCase().includes(criterio) || 
        p.codigo.toLowerCase().includes(criterio)
    );

    if (filtrados.length === 0) {
        resultado.innerHTML = '<p>No se encontraron productos para el criterio ingresado.</p>';
    } else {
        filtrados.forEach(p => {
            resultado.innerHTML += `
                <div class="producto">
                    <p><strong>Código:</strong> ${p.codigo}</p>
                    <p><strong>Nombre:</strong> ${p.nombre}</p>
                    <p><strong>Descripción:</strong> ${p.descripcion}</p>
                    <p><strong>Precio:</strong> ${formatearPrecio(p.precio)}</p>
                    <button onclick="agregarAlCarrito('${p.codigo}')">Agregar al carrito</button>
                </div>
            `;
        });
    }
}

function limpiar() {
    document.getElementById('criterio').value = '';
    document.getElementById('resultado').innerHTML = '<p>No hay resultados que mostrar.</p>';
}

function agregarAlCarrito(codigo) {
    const producto = productos.find(p => p.codigo === codigo);
    if (producto) {
        carrito.push(producto);
        actualizarCarrito();
        alert(`Producto con código ${codigo} agregado al carrito`);
    }
}

function eliminarDelCarrito(codigo) {
    carrito = carrito.filter(p => p.codigo !== codigo);
    actualizarCarrito();
    alert(`Producto con código ${codigo} eliminado del carrito`);
}

function actualizarCarrito() {
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = '<h2>Carrito de Compras</h2>';
    if (carrito.length === 0) {
        carritoDiv.innerHTML += '<p>El carrito está vacío.</p>';
    } else {
        carrito.forEach(p => {
            carritoDiv.innerHTML += `
                <div class="producto">
                    <p><strong>Código:</strong> ${p.codigo}</p>
                    <p><strong>Nombre:</strong> ${p.nombre}</p>
                    <p><strong>Precio:</strong> ${formatearPrecio(p.precio)}</p>
                    <button onclick="eliminarDelCarrito('${p.codigo}')">Eliminar</button>
                </div>
            `;
        });
    }
}

window.onload = cargar;
