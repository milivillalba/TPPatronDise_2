"use strict";
// //EJERSICIO 2:
// //interfaz para los equipos:
// interface Equipo{
//     tipo:string;
//     nombre:string;
//     ram:string;
//     procesador:string;
//     //metodo para mostrar detalle
//     detalles():string;
// }
// //Clase para Notebook:
// class Notebook implements Equipo{
//     tipo: string='Notebook';
//     nombre: string;
//     ram:string;
//     procesador: string;
//     constructor(nombre:string,ram:string,procesador:string){
//         this.nombre=nombre;
//         this.ram=ram;
//         this.procesador=procesador;
//     }
//     //metodo para mostrar detalle
//     detalles():string{
//         return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador:${this.procesador}`;  
//     }
// }
// //Clase para Computadora de escritorio:'Desktop'
// class Desktop implements Equipo{
//     tipo: string='Desktop';
//     nombre: string;
//     ram: string;
//     procesador: string;
//     //constructor 
//     constructor(nombre:string,ram:string,procesador:string){
//         this.nombre=nombre;
//         this.ram=ram;
//         this.procesador=procesador;
//     }
//     //metodo para mostrar detalle
//     detalles():string{
//         return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram},Procesador:${this.procesador}`;
//     }
// }
// // Clase Servidor
// class Servidor implements Equipo {
//     tipo: string = "Servidor";
//     nombre: string;
//     ram: string;
//     procesador: string;
//     constructor(nombre: string, ram: string, procesador: string) {
//       this.nombre = nombre;
//       this.ram = ram;
//       this.procesador = procesador;
//     }
//     detalles(): string {
//       return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
//     }
// }
// //Clase factory para crear equipos
// class EquipoFactory {
//     //metodo para crear un equipo basado en el tipo
//     public crearEquipo(tipo:string,nombre:string,ram:string,procesador:string):Equipo{
//       if(tipo==='Notebook'){
//         return new Notebook(nombre,ram,procesador);
//       }else if(tipo==='Desktop'){
//         return new Desktop(nombre,ram,procesador);
//       }else if(tipo==='Servidor'){
//         return new Servidor(nombre,ram,procesador);
//       }
//       throw new Error('No se reconocio el tipo de equipo')
//     }
// }
// //EJEMPLO DE USO PARA Factory Method
// const factory= new EquipoFactory();
// const notebook= factory.crearEquipo('Notebook',"Dell XPS", "16GB", "i7");
// console.log(notebook.detalles());
