//Math Object
var list = new Array();
list[0] = Math.round(3.29);
list[1] = Math.round(3.56);
list[2] = Math.floor(6.37);
list[3] = Math.PI;
list[4] = Math.E;
list[5] = Math.sqrt(123);
list[6] = Math.random(); // between 0-1
list[7] = Math.max(131532, 695654, 3225634, 355312);
list[8] = Math.min(32185,635541,153541,6342685241);

document.write("Values of the numbers:");
document.write("<hr>");

for (var x=0; x<list.length; x++){
    document.write(list[x]+"<hr>")
}