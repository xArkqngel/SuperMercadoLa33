function User(name, price, city, email) {
  this.name = name;
  this.price = price;
}


let myArr = [
  new User('Poker', '3500'),
  new User('Suavitel', '12000'),
  new User('Arroz Diana', '6000'),
  new User('Doña Gallina', '600'),
  new User('Cerveza', '3500')
]

document.querySelector("#myTable tbody").innerHTML = myArr.map(user => `<tr><td>${user.name}</td><td>${user.price}</td><td><div class="counter">
      <span class="down" onClick='decreaseCount(event, this)'>-</span>
      <input type="text" value="1">
      <span class="up"  onClick='increaseCount(event, this)'>+</span>
    </div></td></tr>`).join('');



