const articulos = [
    {Nombre:'Resma A4', Marca:'Boreal', Precio:'2300'},
    {Nombre:'Resma Oficio', Marca:'Boreal', Precio:'2900'},
    {Nombre:'Toner Universal HP', Marca:'Generico', Precio:'5900'},
    {Nombre:'Toner Universal Xerox', Marca:'Generico', Precio:'6750'},
    {Nombre:'Toner Universal Brother', Marca:'Generico', Precio:'5900'},
] 
let cantidad='';
///let total=0;
let opcion='';
let agregar='';

const detalleFactura = [];

console.log(articulos);


alert('Bienvenido al carrito de compras!');

do{
    const listaArticulos= articulos.map(
        (articulo,index) =>`${index + 1}:${articulo.Nombre} $: ${articulo.Precio} `
    )
    opcion = parseInt(prompt("Seleccione un articulo para añadir al carrito"+ "\n \n" + listaArticulos.join(('\n'))));

    while (opcion <= 0|| opcion > articulos.length){}


    cantidad = parseInt(prompt('Ingrese Cantidad deseada'))
    detalleFactura.push({nombre: articulos[opcion-1].Nombre, precioUnitario: articulos[opcion-1].Precio, cantidad, subtotal:articulos[opcion-1].Precio*cantidad});
        
    ///total = total + articulos[opcion-1].Precio*cantidad;
    total= detalleFactura.reduce((total,itemFactura ) => total + itemFactura.precioUnitario*itemFactura.cantidad, 0);

    agregar= prompt('Desea agregar mas articulos?') 
}while(agregar=='si')
alert(`Su total es de ${total}`)
alert ('Gracias por su compra, en consola podra ver si ticket!' )

