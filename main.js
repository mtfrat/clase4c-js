// Consigna: codifica al menos tres funciones cuyas instrucciones permitan resolver un problema particular, segmentado en tareas. La información a procesar debe ser ingresada por el usuario, y el resultado del procesamiento visualizado en una salida.

function ingresarPrecio() {
    valorIngresado = parseInt(prompt("Ingrese precio: "))
    return valorIngresado
}

function mostrarPrecios(bruto,neto){
    console.log("El precio bruto es: ", bruto)
    console.log("El precio neto es: ", neto)
}

let precioBruto = ingresarPrecio()
let calcularIva = precioBruto => precioBruto * 1.21
mostrarPrecios(precioBruto,calcularIva(precioBruto))