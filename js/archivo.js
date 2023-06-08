

let precio;
let item;
let cantidad;
let total=0;
let ticket = '';
let opcion;

alert('Bienvenido al carrito de compras, presione aceptar, para continuar')

do {
  item = prompt('Que articulo desea agregar?');
  precio = Number(prompt('Ingrese el precio'));

  
  while (precio < 0) {
    precio = Number(prompt("Precio incorrecto, intente nuevamente"));
    }
    
  cantidad = parseInt(prompt('Ingrese Cantidad'));

  while (cantidad <=0) {
    cantidad = Number(prompt('Cantidad incorrecta, por favor digite una cantidad correcta!'));
  }

  ticket = ticket+ `Articulo: ${item}\nPrecio Unitario: ${precio} \n Cantidad: ${cantidad} \nSubtotal: $${cantidad*precio} `;
  total =total+cantidad*precio;

  opcion = prompt('Desea agregar otro item?')
} while (opcion == 'si');

  alert(`${ticket} Su total es de: $${total}`)
