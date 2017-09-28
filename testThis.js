function someFunction() {
    console.log('outer this: ', this);
    someOtherFunction(function () {
        console.log('inner this: ', this);
    });
}
function someOtherFunction(aFunction) {
    aFunction();
}
var momchi = { name: 'momchi' };
var annie = { name: 'annie' };
momchi.someFunction = someFunction;
annie.someFunction = someFunction;
momchi.a = 5;
momchi.someFunction();
annie.someFunction();
