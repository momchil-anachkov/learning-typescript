var testLambda = function (x, y) {
    console.log(x + y);
};
var testLambda2 = function (x, y) {
    console.log(x - y);
};
var testLambda3 = function (x) {
    console.log(x);
};
var testLambda4 = function () {
    console.log('nothingness');
};
testLambda(1, 2);
testLambda2(4, 3);
testLambda3(5);
testLambda4();
