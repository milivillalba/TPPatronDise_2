"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//clase de inventario con el patron singleton
class Inventario {
    //constructor privado para que no se puedan crear mas instancias
    constructor() {
        //lista de equipos
        this.equipos = [];
    }
    //metodo estatito para obtener la instancia de Intervalo
    static obtenerInstancia() {
        if (!Inventario.instancia) {
            Inventario.instancia = new Inventario();
        }
        return Inventario.instancia;
    }
    //metodo para agregar equipos al inventario
    agregarEquipo(nombre, tipo, estado) {
        const nuevoEquipo = { nombre, tipo, estado };
        this.equipos.push(nuevoEquipo);
    }
    //Metodo para listar todo los equipos
    listarEquipos() {
        //para que devuelva la lista completa de equipos
        return this.equipos;
    }
}
//EJEMPLO DE USO DE SINGLETON
//1:obtener la instancia unica.
const inventario = Inventario.obtenerInstancia();
//2:agregar un equipo.
inventario.agregarEquipo('Notebook HP', 'Portatil', 'disponible');
//3:Listar los equipos.
console.log(inventario.listarEquipos());
