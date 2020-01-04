var a = Math.floor(Math.random()*1000) - 500;
console.log("a: " + a);
var b = Math.floor(Math.random()*1000) - 500;
console.log("b: " + b);
var c = Math.floor(Math.random()*1000) - 500;
console.log("c: " + c);
var d = (b*b - 4*a*c);
document.write("<h2>(" + a + "x<sup>2</sup>) + (" + b + "x) + (" + c + ") = 0</h2>");


if (d >= 0) {
  var x = (-b + Math.sqrt(b*b - 4*a*c))/(2*a);
  var y = (-b - Math.sqrt(b*b - 4*a*c))/(2*a);
  console.log("x: " + x + " y: " + y);
  document.write("<h3>Equation Roots:</h3><br>")
  document.write("<p class='roots'>" + x.toFixed(3) + "</p>");
  document.write("<p class='roots'>" + y.toFixed(3) + "</p>");
  document.write("</div>");

} else {
  console.log("No real roots for the equation");
    document.write("<div class='roots'>No real roots</div>");

}
