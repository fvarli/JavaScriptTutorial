var x = 1;

function first(param) {

    document.write("This is the first function:" + " " + param + " " + "time(s)" + " ");
    second(param);
}

function second(param2) {

    document.write("This is the second function:" + " " + param2 +" "+ "time(s)" + "<br>");
    param2 = param2 +1;
    first(param2);

}

/*function final() {
    first();
    document.write("<br>" + "<br>");
    second();
}
final();
*/
first(x);