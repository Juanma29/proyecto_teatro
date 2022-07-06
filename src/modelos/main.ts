import readline from 'readline-promise';
import { Teatro } from './teatro';

async function main() {

// configuración de readline-promise
const rlp = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

  let opcion: string;
  const teatro = new Teatro();

  // inicialización de readline
do{
  // console.clear();
  console.log('TEATRO LA BOMBILLA DE DON BLAS');
  console.log('------------------------------');
  console.log("1. Ver la programación actual");
  console.log("2. Mostrar todas las localidades");
  console.log("3. Mostrar localidades ocupadas");
  console.log("4. Vender localidad");
  console.log("5. Cancelar localidad");
  console.log("6. Consultar localidad");
  console.log("7. Calcular recaudacion");
  console.log("8. Terminar programa");
  

  opcion = await rlp.questionAsync('¿Qué opción deseas?\n');
  

  if(opcion === "1") {
    teatro.VerProgramacionActual();
    await rlp.questionAsync('');
    
  }
  else if (opcion === "2") {
    console.log('Opción 2');
    
  }
  else if (opcion === "3") {
    console.log('Opción 3');
    
  }
  else if (opcion === "4") {
    console.log('Opción 4');
    
  }
  else if (opcion === "5") {
    console.log('Opción 5');
    
  }
  else if (opcion === "6") {
    console.log('Opción 6');
    
  }
  else if (opcion === "7") {
    console.log('Opción 7');
    
  }
  else if (opcion === "8") {
    console.log('Opción 8');
    
  }

  //El bloque de código de este else solamente se ejecuta cuando todos los anteriores else if no se cumple, ni tampoco el primer if
  else {
    console.log('Opción Inválida');
    
  }
  
} while(opcion !== '8');

  //cerrar readline
  rlp.close();
}

main();