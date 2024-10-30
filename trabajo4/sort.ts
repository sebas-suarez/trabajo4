import * as rs from 'readline-sync';
import { cargarArray, escribirEnUnaLinea } from './funciones';

let maximoPosible=rs.questionInt('Cual es el maximo posible de los numeros del arreglo? ')
let dimension:number=rs.questionInt('Cual sera la dimension del arreglo? ');
let arreglo:number[]=new Array();


cargarArray(arreglo, dimension, maximoPosible);
escribirEnUnaLinea(arreglo,dimension);
arreglo.sort((a, b) => b - a);
escribirEnUnaLinea(arreglo,dimension);

