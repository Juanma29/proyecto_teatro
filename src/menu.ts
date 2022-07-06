import { Teatro } from './teatro';
export function mostrarMenu(): void {
    // console.clear();
    console.log('TEATRO LA BOMBILLA DE DON BLAS');
    console.log('------------------------');
    console.log("1. Ver la programación actual");
    console.log("2. Mostrar todas las localidades");
    console.log("3. Mostrar localidades ocupadas");
    console.log("4. Vender localidad");
    console.log("5. Cancelar localidad");
    console.log("6. Consultar localidad");
    console.log("7. Calcular recaudacion");
    console.log("8. Terminar programa");
}

export async function gestionarOpcion(
    opcion: string,
    rlp,
    teatro: Teatro): Promise<void> {

    if(opcion === '1') {
        console.clear();
        teatro.VerProgramacionActual();
        await rlp.questionAsync('');
    }
    else if(opcion === '2') {
        console.clear();
        teatro.mostrarLocalidades();
        await rlp.questionAsync('');
           
    }
    else if(opcion === '3') {
        console.clear();
        teatro.mostrarLocalidadesOcupadas();
        await rlp.questionAsync(''); 
    }
    else if(opcion === '4') {
        console.clear();
        await teatro.venderLocalidad(rlp)
        await rlp.questionAsync('');    
    }
    else if(opcion === '5') {
        console.log('Opción 5');    
    }
    else if(opcion === '6') {
        console.log('Opción 6');    
    }
    else if(opcion === '7') {
        console.log('Opción 7');    
    }
    else if(opcion === '8') {
        console.log('Opción 8');    
    }
    // el bloque de código de else solamente se ejecuta cuando todos los anteriores else if no se cumple, ni tampoco el primer if
    else { 
        console.log('Opción inválida');    
    }
}