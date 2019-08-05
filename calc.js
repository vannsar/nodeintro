function doMath(num1, operator, num2){
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch(operator){
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
}
var num1 = (process.argv[2]);
var operator = (process.argv[3]);
var num2 = (process.argv[4]);

var answer = doMath(num1,operator,num2);

console.log( answer );
