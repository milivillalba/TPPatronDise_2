// Interfaz Inventario que define el formato de los equipos
interface Inventario {
    equipos: { nombre: string, tipo: string, estado: string }[];
}

// Clase InventarioViejo que representa el sistema antiguo de inventarios
class InventarioViejo implements Inventario {
    equipos: { nombre: string, tipo: string, estado: string }[];

    constructor() {
        this.equipos = [];
    }

    // Método para listar los equipos del inventario viejo
    public listarEquipos() {
        return this.equipos;
    }

    // Método para agregar equipos al inventario viejo
    public agregarEquipo(nombre: string, tipo: string, estado: string ): void {
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

    private inventarioViejo: InventarioViejo;

    constructor(inventarioViejo: InventarioViejo) {
        this.inventarioViejo = inventarioViejo;
    }

    // Método para agregar equipos usando la interfaz del sistema viejo
    public agregarEquipo(nombre: string, tipo: string, estado: string) {
        this.inventarioViejo.agregarEquipo(nombre, tipo, estado);
    }

    // Método para listar los equipos usando la interfaz del sistema viejo
    public listarEquipos() {
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
