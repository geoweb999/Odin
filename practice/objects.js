
function Student(name, grade) {
  this.name = name
  this.grade = grade
  this.printName = function() {
    console.log(name + " " + grade)
  }
}

const Student1 = new Student("Tim", 5);
const Student2 = new Student("Mary", 6);
const Student3 = new Student("Bob", 4);

Student1.printName();
Student2.printName();
Student3.printName();

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    console.log(title + " by " + author + ", " + pages + " pages, " + read)
  }
}

const book1 = new Book("The Hobbit", "JRR Tolkein", 295, "not read yet");
console.log(book1.info());
console.log(book1.valueOf());

function Person(name) {
  this.name = name
}

Person.prototype.sayName = function() {
  console.log(`Hello, I'm ${this.name}!`)
}

function Player(name, marker) {
  this.name = name
  this.marker = marker
}

Player.prototype.getMarker = function() {
  console.log(`My marker is '${this.marker}'`)
}

// Object.getPrototypeOf(Player.prototype) should 
// return the value of "Person.prototype" instead 
// of "Object.prototype"
Object.getPrototypeOf(Player.prototype) // returns Object.prototype

// Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype)
Object.getPrototypeOf(Player.prototype) // returns Person.prototype

const player1 = new Player('steve', 'X')
const player2 = new Player('also steve', 'O')

player1.sayName() // Hello, I'm steve!
player2.sayName() // Hello, I'm also steve!

player1.getMarker() // My marker is 'X'
player2.getMarker() // My marker is 'O'