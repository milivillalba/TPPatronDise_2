// interfaz de Observador para cualquier clase que quiera observar cambios
interface Observador {
    notificar(nombreEquipo: string, nuevoEstado: string): void;
  }

// Clase Soporte :
class Soporte implements Observador {
    // Método que se llamara cuando el estado de un equipo cambie
    notificar(nombreEquipo: string, nuevoEstado: string): void {
      console.log(`Soporte notificado: ${nombreEquipo} ha cambiado su estado a ${nuevoEstado}`);
    }
 }

 // Clase Equipo que permitirá agregar observadores y notificarles
class Equipo {
    private nombre: string;
    private tipo: string;
    private estado: string;
    private observadores: Observador[] = []; // Lista de observadores
  
    constructor(nombre: string, tipo: string, estado: string) {
      this.nombre = nombre;
      this.tipo = tipo;
      this.estado = estado;
    }
  
    // Método para agregar observadores
    agregarObservador(observador: Observador): void {
      this.observadores.push(observador);
    }
  
    // Método para cambiar el estado y notificar a los observadores
    cambiarEstado(nuevoEstado: string): void {
      this.estado = nuevoEstado;
      this.notificarObservadores();
    }
  
    // Método que notifica a todos los observadores del cambio de estado
    private notificarObservadores(): void {
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
equipo.agregarObservador(soporte)
//Cambiar el estado del equipo
equipo.cambiarEstado('en reparacion')
  