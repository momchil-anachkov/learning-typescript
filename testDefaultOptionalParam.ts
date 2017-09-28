test();
test2();

function test(param1?: number) {
}

var test2 = function () {

  if (1 == 1) {
    let test4;
    var test3;
    test5 = 5;
  }

  test3 = 'lol';
}

var myvar = 'my value'; 
  
(function() { 
  alert(myvar); // my value 
})();

var myvar = 'my value'; 
  
(function() { 
  myvar = 'local value'; 
  alert(myvar); // undefined 
})();

console.log(test3); //error


test();
test2();