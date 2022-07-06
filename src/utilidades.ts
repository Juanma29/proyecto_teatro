export function obtenerTipo(edad: number): string {

    if ((edad >= 0) && (edad <= 12)) {
        return "INFANTIL"
    }
    else if ((edad >= 13) && (edad <= 17)){
        return "MENOR"
    }
    else if ((edad >= 18) && (edad <= 64)){
        return "MAYOR"
    }
    else if ((edad >=65) && (edad <= 120)){
        return "JUBILADO"
    }
    else{
        return 'ERROR'
    }
}

export function obtenerPrecioEntrada(tipo: string): number {
    const precioEntrada = 30;

    if (tipo === 'INFANTIL'){
        return precioEntrada - (precioEntrada * 0.5); //50%
    }
    else if(tipo === 'MENOR'){
        return precioEntrada - (precioEntrada * 0.2); //20%
    }
    else if (tipo === 'JUBILADO'){
        return precioEntrada - (precioEntrada * 0.66); //66%
    }

    return precioEntrada;
}