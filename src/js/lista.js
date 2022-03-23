function User(name, lastname, city, email) {
  this.name = name;
  this.lastname = lastname;
  this.city = city;
  this.email = email;
}

let myArr = [
  new User('Leonardo', 'Parigini', 'Santorini', 'leoparigini@gmail.com'),
  new User('Edoardo', 'Merlini', 'Monaco', 'edomerlini@gmail.com'),
  new User('Nicole', 'De Lellis', 'Milano', 'nickydelellis@gmail.com'),
  new User('Jasmine', 'Scherzinger', 'Los Angeles', 'jazzylax@gmail.com'),
  new User('Emily', 'Knowles', 'San Francisco', 'emilyknow@gmail.com')
]

document.querySelector("#myTable tbody").innerHTML = myArr.map(user => `<tr><td>${user.name}</td><td>${user.lastname}</td><td>${user.city}</td><td><button>TEst</button></td></tr>`).join('')