"use strict";
// Clase InventarioViejo que representa el sistema antiguo de inventarios
class InventarioViejo {
    constructor() {
        this.equipos = [];
    }
    // Método para listar los equipos del inventario viejo
    listarEquipos() {
        return this.equipos;
    }
    // Método para agregar equipos al inventario viejo
    agregarEquipo(nombre, tipo, estado) {
        const equipo = {
            nombre: nombre,
            tipo: tipo,
            estado: estado
        };
        this.equipos.push(equipo);
    }
}
// Clase AdaptadorInventario que adapta el sistema viejo al nuevo formato
class AdaptadorInventario {
    constructor(inventarioViejo) {
        this.inventarioViejo = inventarioViejo;
    }
    // Método para agregar equipos usando la interfaz del sistema viejo
    agregarEquipo(nombre, tipo, estado) {
        this.inventarioViejo.agregarEquipo(nombre, tipo, estado);
    }
    // Método para listar los equipos usando la interfaz del sistema viejo
    listarEquipos() {
        return this.inventarioViejo.listarEquipos();
    }
}
// Ejemplo de uso
const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
// Agregar equipo usando el adaptador
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
// Listar equipos del inventario
console.log(adaptador.listarEquipos());
