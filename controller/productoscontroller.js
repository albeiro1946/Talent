class ProductosController {
    construct() {}
    consultar(req, res) {
        try {
            let data = [
                {
                    codigo: "Por1001",
                    nombre: "Portátil Lenovo IdeaPad 3",
                    descripcion: "Intel Core i5, 8GB RAM, 256GB SSD, pantalla 15.6\"",
                    precio: 2400000
    },
                {
                    codigo: "Por1002",
                    nombre: "Portátil Dell Inspiron 15",
                    descripcion: "Intel Core i7, 16GB RAM, 512GB SSD, pantalla 15.6\"",
                    precio: 3500000
    },
                {
                    codigo: "Por1003",
                    nombre: "Portátil HP Pavilion x360",
                    descripcion: "Intel Core i5, 8GB RAM, 512GB SSD, pantalla táctil 14\"",
                    precio: 3200000
    },
                {
                    codigo: "Tec2001",
                    nombre: "Teclado Logitech K120",
                    descripcion: "Teclado alámbrico con diseño ergonómico y teclas silenciosas",
                    precio: 55000
    },
                {
                    codigo: "Tec2002",
                    nombre: "Teclado Mecánico Redragon Kumara K552",
                    descripcion: "Teclado mecánico compacto, retroiluminación RGB",
                    precio: 185000
    },
                {
                    codigo: "Tec2003",
                    nombre: "Teclado Inalámbrico Microsoft Bluetooth Keyboard",
                    descripcion: "Diseño minimalista, conectividad Bluetooth, teclas silenciosas",
                    precio: 210000
    },
                {
                    codigo: "Mou3001",
                    nombre: "Mouse Logitech M185",
                    descripcion: "Mouse inalámbrico, diseño compacto, batería de larga duración",
                    precio: 65000
    },
                {
                    codigo: "Mou3002",
                    nombre: "Mouse Razer DeathAdder Essential",
                    descripcion: "Mouse para gaming, sensor óptico de alta precisión, diseño ergonómico",
                    precio: 185000
    },
                {
                    codigo: "Mou3003",
                    nombre: "Mouse Inalámbrico Microsoft Modern Mobile Mouse",
                    descripcion: "Diseño delgado, conectividad Bluetooth, compatible con múltiples sistemas",
                    precio: 130000
    }
                ];
            res.status(200).json(data);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
}
module.exports = new ProductosController();
