// Consigna: codifica al menos tres funciones cuyas instrucciones permitan resolver un problema particular, segmentado en tareas. La información a procesar debe ser ingresada por el usuario, y el resultado del procesamiento visualizado en una salida.

let cantidad = 0

function ingresoProductos() {
    var decision = "n"
    var precioTotal = 0
    while (decision !== "y"){
        var precioUnitario = parseInt(prompt("Ingrese precio: "))
        precioTotal += precioUnitario
        cantidad += 1
        decision = prompt("Presione 'y' si finalizo de ingresar productos: \nDe no ser así, presione cualquier tecla")
    }
    if(decision == "y"){
        return precioTotal
    }
}

function mostrarPrecios(bruto,neto, cant){
    console.log("El precio bruto total es: ", bruto)
    console.log("El precio neto total es: ", neto)
    console.log("La cantidad de productos fueron: ", cantidad)
}


let precioBruto = ingresoProductos()
let calcularIva = precioBruto => precioBruto * 1.21
mostrarPrecios(precioBruto,calcularIva(precioBruto))