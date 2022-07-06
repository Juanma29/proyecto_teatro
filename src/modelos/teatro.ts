import { Localidad } from './localidades';
export class Teatro {

    localidades: Localidad[];
// el constructor se ejecuta cuando se crea un objeto de esta clase
    constructor(){
        this.localidades = [];

        for(let i=0; i<10; i++){
            console.log(i);
            this.localidades.push({
                columna: i,
                fila: 0,
                estaOcupada: false,
                nombreReserva: undefined,
                edadReserva: undefined,
                telefonoReserva:undefined
            });
        }
    }
   
    VerProgramacionActual () {
        console.log('Hoy representamos la cena de los idiotas, género: Comedia, Duración: 95');
        console.log('En C/Sol 45, local de 300 metros, con 2 accesos');
        console.log('Precio: 30.0');                    
    }
}