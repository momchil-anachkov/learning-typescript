let testLambda = function (x: number, y: number) {
  console.log(x + y);
}

let testLambda2 = (x: number, y: number) => {
  console.log(x - y);
}

let testLambda3 = x => {
  console.log(x);
}

let testLambda4 = () => {
  console.log('nothingness');
}

testLambda(1, 2);
testLambda2(4, 3);
testLambda3(5);
testLambda4();
