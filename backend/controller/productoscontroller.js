class ProductosController {
    constructor() {}

    consultar(req, res) {
        try {
            let data = [
                { codigo: '1', nombre: 'Laptop HP Pavilion', descripcion: 'Laptop de 15.6" con procesador Intel i5, 8GB RAM, 512GB SSD.', precio: 850000 },
                { codigo: '2', nombre: 'Mouse Logitech G502', descripcion: 'Mouse gaming con 11 botones programables y sensor HERO 25K.', precio: 60000 },
                { codigo: '3', nombre: 'Teclado Mecánico Redragon K552', descripcion: 'Teclado compacto RGB con switches mecánicos rojos.', precio: 40000 },
                { codigo: '4', nombre: 'PC de Escritorio Dell Optiplex', descripcion: 'PC con Intel i7, 16GB RAM, 1TB HDD + 256GB SSD.', precio: 950000},
                { codigo: '5', nombre: 'Monitor Samsung Curvo', descripcion: 'Monitor curvo de 27" Full HD con tasa de refresco de 75Hz.', precio: 200000 },
                { codigo: '6', nombre: 'Headset HyperX Cloud II', descripcion: 'Auriculares gaming con sonido envolvente 7.1 y micrófono desmontable.', precio: 80000 },
                { codigo: '7', nombre: 'SSD Kingston A2000', descripcion: 'Unidad SSD NVMe M.2 de 1TB para almacenamiento ultrarrápido.', precio: 110000 },
                { codigo: '8', nombre: 'Impresora Epson EcoTank L3150', descripcion: 'Impresora multifuncional inalámbrica con sistema de tinta recargable.', precio: 220000 },
                { codigo: '9', nombre: 'Router TP-Link Archer C6', descripcion: 'Router inalámbrico de doble banda con soporte para MU-MIMO.', precio: 180000 },
                { codigo: '10', nombre: 'GPU Nvidia RTX 3060', descripcion: 'Tarjeta gráfica con 12GB GDDR6 para gaming y diseño.', precio: 1350000 },
            ];
            res.status(200).json(data);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
}

module.exports = new ProductosController();
