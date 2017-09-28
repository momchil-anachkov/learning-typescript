function testRestParameters(param1: string, param2: number, ...restOfParams: Array<any>) {
  console.log(param1, param2, restOfParams);
}

var arr: Array<string> = ['sldkfj', 'slkfjsdl']

testRestParameters('lol', 7, 'lel', 'lal', 'lil', 69, 420, '<3');