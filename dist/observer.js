"use strict";
// Clase Soporte :
class Soporte {
    // Método que se llamara cuando el estado de un equipo cambie
    notificar(nombreEquipo, nuevoEstado) {
        console.log(`Soporte notificado: ${nombreEquipo} ha cambiado su estado a ${nuevoEstado}`);
    }
}
// Clase Equipo que permitirá agregar observadores y notificarles
class Equipo {
    constructor(nombre, tipo, estado) {
        this.observadores = []; // Lista de observadores
        this.nombre = nombre;
        this.tipo = tipo;
        this.estado = estado;
    }
    // Método para agregar observadores
    agregarObservador(observador) {
        this.observadores.push(observador);
    }
    // Método para cambiar el estado y notificar a los observadores
    cambiarEstado(nuevoEstado) {
        this.estado = nuevoEstado;
        this.notificarObservadores();
    }
    // Método que notifica a todos los observadores del cambio de estado
    notificarObservadores() {
        this.observadores.forEach((observador) => {
            observador.notificar(this.nombre, this.estado);
        });
    }
}
//EJEMPLO DE USO DEL PATRON OBSERVADOR
//Crear el observador soporte
const soporte = new Soporte();
//crear un equipo y agregar el observador soporte
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
//Cambiar el estado del equipo
equipo.cambiarEstado('en reparacion');
