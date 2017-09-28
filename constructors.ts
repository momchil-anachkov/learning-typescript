function Person(name: string, age: number, sex: string, sexuality: string) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.sexuality = sexuality;
  // this.sayHi = function () {
  //   console.log('Hi there, I\'m not ', this.name);
  // }
}

Person.prototype.sayHi = function () {
  console.log('Hi there, I\'m ', this.name);
}

let somePerson = new Person('Momchi', 25, 'male', 'bisexual');

// {} -> this in function -> return the object

somePerson.sayHi();

console.log(somePerson);