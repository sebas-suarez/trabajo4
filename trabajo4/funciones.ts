function azar(numAzar:number): number {
    // math.floor()-(redondea el numbero generado hacia abajo)
    //math.random()-(Math.random() genera un numero al azar)
    // * numAzar- (pone el numero maximo que se generara con mathRandom) ej *100-(Maximo 100)
    return Math.floor(Math.random() * numAzar);
}

export function cargarArray(arreglo:number[], cantidad:number, MaximoAzar:number){
    for(let i = 0;i<cantidad;i++){
        arreglo[i]=azar(MaximoAzar);
        //agrega un numero al arreglo con la funcion azar 
    }
}

export function escribirEnUnaLinea(arreglo:number[], cantidad:number) { 
    let i:number;
    let vector:string = "" ;
        for (i = 0 ; i<cantidad; i++) {
            vector += `${arreglo[i]} `;
        }
    console.log (vector); 
    }