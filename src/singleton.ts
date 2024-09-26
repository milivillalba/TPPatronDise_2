// Ejercicio 1:
//tipo para estado
export type Estado='disponible'| 'en reparacion'|'reservado';
//tipos para equipos
type Equipo={ 
    nombre:string;
    tipo:string;
    estado:Estado;
}

//clase de inventario con el patron singleton
class Inventario{
    //aqui se va almacenar la unica instancia
    private static instancia: Inventario; 
    //lista de equipos
    private equipos:Equipo[]=[]; 

    //constructor privado para que no se puedan crear mas instancias
    private constructor(){}

    //metodo estatito para obtener la instancia de Intervalo
    public static obtenerInstancia():Inventario{
        if(!Inventario.instancia){
            Inventario.instancia= new Inventario();
        }
        return Inventario.instancia;
    }
    //metodo para agregar equipos al inventario
    public agregarEquipo(nombre:string,tipo:string,estado:Estado):void{
        const nuevoEquipo:Equipo={nombre,tipo,estado};
        this.equipos.push(nuevoEquipo);
    }
    //Metodo para listar todo los equipos
    public listarEquipos():Equipo[]{
        //para que devuelva la lista completa de equipos
        return this.equipos;
    }
}
//EJEMPLO DE USO DE SINGLETON
//1:obtener la instancia unica.
const inventario=Inventario.obtenerInstancia();
//2:agregar un equipo.
inventario.agregarEquipo('Notebook HP','Portatil','disponible');
//3:Listar los equipos.
console.log(inventario.listarEquipos());