const envioCaba = cactus => cactus + 500;
const envioGba = cactus => cactus + 1000;
const envioInterior = cactus => cactus + 1700;

let nombreUsuario = prompt("Hola bienvenido a nuestra pagina, por favor ingresa tu nombre:");
alert("Recorda que nuestros cactus tienen un costo fijo de $1000, el envío varia en base a la localidad seleccionada.");
let envioSeleccionado = prompt("Por favor ingresa la letra que se encuentra a la izquierda del envío deseado: \n A Envíos a CABA \n B Envíos a GBA \n C Envíos al Interior \nEscribí Cancelar, para anular la compra :(");
let i = 1;
while(envioSeleccionado != "Cancelar"){
    i = i+1;
    let cactus = 1000;
    switch(envioSeleccionado){
        case "A":
            let a = "Envíos a CABA";
            alert(`${nombreUsuario}, seleccionaste ${a}. \nEl costo total es ${envioCaba(cactus)} \nMuchas gracias por tu compra!\nTu numero de pedido es ROC0023-${i}`);
            break;
        case "B":
            let b = "Envíos a GBA";
            alert(`${nombreUsuario}, seleccionaste ${b}. \nEl costo total es ${envioGba(cactus)} \nMuchas gracias por tu compra!\nTu numero de pedido es ROG0023-${i}`);
            break;
        case "C":
            let c = "Envíos al Interior";
            alert(`${nombreUsuario}, seleccionaste ${c}. \nEl costo total es ${envioInterior(cactus)} \nMuchas gracias por tu compra!\nTu numero de pedido es ROI0023-${i}`);
            break;
        case "Cancelar":
            alert("Muchas gracias por tu visita");
        default:
            alert("ud ingreso una opcion incorrecta");
    }
    
    nombreUsuario = prompt("Hola bienvenido a nuestra pagina, por favor ingresa tu nombre:");
    alert("Recorda que nuestros cactus tienen un costo fijo de $1000, el envío varia en base a la localidad seleccionada.");
    envioSeleccionado = prompt("Por favor ingresa la letra que se encuentra a la izquierda del envío deseado: \n A Envíos a CABA \n B Envíos a GBA \n C Envíos al Interior");
}