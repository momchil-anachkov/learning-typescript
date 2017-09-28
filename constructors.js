function Person(name, age, sex, sexuality) {
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
};
var somePerson = new Person('Momchi', 25, 'male', 'bisexual');
// {} -> this in function -> return the object
somePerson.sayHi();
console.log(somePerson);
