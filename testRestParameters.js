function testRestParameters(param1, param2) {
    var restOfParams = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        restOfParams[_i - 2] = arguments[_i];
    }
    console.log(param1, param2, restOfParams);
}
testRestParameters('lol', 7, 'lel', 'lal', 'lil', 69, 420, '<3');
