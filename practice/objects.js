
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
