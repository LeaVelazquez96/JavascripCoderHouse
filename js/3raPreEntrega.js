//Carrito de compras!
//3ra Pre Entrega 

let carrito = []
let stock = []


// stock.push(new Producto('Resma A4 80Grs', 2600, 'Boreal'));
// stock.push(new Producto('clip N6', 280, 'Olami'));
// stock.push(new Producto('Boligrafo 1mm', 100, 'Consul'));
// stock.push(new Producto('Resma A4 75Grs',1300,'Boreal'));
// stock.push(new Producto('Resma A4 75Grs', 1100, 'Pampa'));
// stock.push(new Producto('Bilbiorato Gris Oficio', 900, 'Cartopel'));
// stock.push(new Producto('Regla 30cm', 60, 'Liggo')) ;
// stock.push(new Producto('Adhesivo Vinilico x250Grs', 400, 'Tintoretto'));
// stock.push(new Producto('Toner Alternativo', 6200, "GTC"));


// localStorage.setItem(`stock`,JSON.stringify(stock))


const tabla = document.getElementById('items');
const selectProductos = document.getElementById('productos')
const btnAgregar = document.getElementById('agregar');
const btnOrdenar = document.getElementById('ordenar');
const btnVaciar = document.getElementById('vaciar');
const total = document.getElementById('total');


function traerItems() {
    stock = JSON.parse(localStorage.getItem("stock")) || [];
    carrito = JSON.parse(localStorage.getItem("carrito"))|| [];
popularDropdown();
}

function popularDropdown() {

    stock.forEach(({nombre,marca,precio},index) => {
        let option = document.createElement("option");
        option.textContent = `${nombre} ${marca}  : $${precio}`;
        option.value = index;
        selectProductos.appendChild(option);
    });
}
function actualizarTablaCarrito() {
    tabla.innerHTML ='';
    total.innerText = 0;
    carrito.forEach((item)  =>{
        newRow(item)
    } );
}

function newRow(item){
    const row = document.createElement("tr");
    let td = document.createElement("td");
    const poscarrito = carrito.indexOf(item);


    td.textContent= `${item.producto.nombre} ${item.producto.marca}`;
    row.appendChild(td);

    td=document.createElement("td");
    td.textContent= item.cantidad;
    row.appendChild(td);

    td=document.createElement("td");
    td.textContent= `$${item.producto.precio}`;
    row.appendChild(td);

    tabla.appendChild(row);
    total.textContent= carrito.reduce((acc,item) => acc + item.producto.precio * item.cantidad, 0);
}





function allEventListeners(){

    document.addEventListener('DOMContentLoaded', traerItems);

    btnAgregar.addEventListener('submit', (e) =>{e.preventDefault();
    const prodElegido = stock[+selectProductos.value];
    const item = new Item (prodElegido,1);
    carrito.push(item)
    localStorage.setItem('carrito',JSON.stringify(carrito));
    actualizarTablaCarrito()
    });
}
allEventListeners();