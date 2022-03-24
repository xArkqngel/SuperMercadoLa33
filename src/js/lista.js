function producto(name, price) {
  this.name = name;
  this.price = price;
}

let myArr = [
  new producto("Poker", "3500"),
  new producto("Suavitel", "12000"),
  new producto("Arroz Diana", "6000"),
  new producto("Doña Gallina", "600"),
  new producto("Cerveza", "3500"),
];

document.querySelector("#myTable tbody").innerHTML = myArr
  .map(
    (
      producto
    ) => `<tr><td>${producto.name}</td><td>${producto.price}</td><td><div class="counter">
      <span class="down" onClick='decreaseCount(event, this)'>-</span>
      <input type="text" value="0">
      <span class="up"  onClick='increaseCount(event, this)'>+</span>
    </div></td></tr>`
  )
  .join("");

function printCart() {
  let nombre = document.getElementById("InputName").value;
  let products = myArr.map((product) => {
    console.log(product.name);
    document.getElementById("productos").innerText += "--" + product.name;
  });
  document.getElementById("nombre").innerText = nombre;
  let price = myArr.map((product) => {
    
    document.getElementById("precio").innerText + product.price;
    
  });

  let suma = 0;

  myArr.forEach(element => {
   
    suma += parseInt( element.price);
    
  });
  document.getElementById("precio").innerText = suma;
  
}
