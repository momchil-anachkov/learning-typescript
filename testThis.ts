function someFunction() {
  console.log('outer this: ', this)
  someOtherFunction(function() {
    console.log('inner this: ', this)
  });
}

function someOtherFunction(aFunction) {
  aFunction();
}


let momchi:any = {name: 'momchi'};
let annie:any = {name: 'annie'};

momchi.someFunction = someFunction;
annie.someFunction = someFunction;

momchi.a = 5;

momchi.someFunction();
annie.someFunction();