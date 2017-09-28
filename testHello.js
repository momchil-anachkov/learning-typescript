var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function () {
        console.log('Hello there');
    };
    return Greeter;
}());
var greeter = new Greeter();
greeter.greet();


var a = new Object();
Object.prototype.sayHello = function(){console.log('hello1')};
a.sayHello() // calls prototype.sayHello
a.sayHello = function(){console.log('hello2')};
a.sayHello() // calls a.sayHello
a.sayHello() // calls a.sayHello