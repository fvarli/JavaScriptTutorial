var firstname = "Fred Test";
var lastname ="Varli";

if (firstname == "Fred"){
    document.write("Your name is"+ " " + firstname);
}
else{
    document.write("Your name is not" + " " + firstname);
}
document.write("<br>");
document.write("<br>");


if((firstname == "Fred")  && (lastname = "Varli") ){

    document.write("Yes, this is the person you are looking for.");

}
else{
    if((firstname == "Fred")  || (lastname == "Varli"))
    {

        document.write("Name or lastname is correct.");

    }   else{
        document.write("No, this is not the person you are looking for.");
    }
}


document.write("<br>");
document.write("<br>");

var firstnumber = 3;
var secondnumber = 7;

if(firstnumber == secondnumber){
    document.write("Both of the numbers are equal.");
}
else if (firstnumber > secondnumber){
    document.write("First number" + " " + firstnumber + "is bigger than second number." );
}else{
    document.write("Second number" + " " + secondnumber + " " + "is bigger than first number." );
}
