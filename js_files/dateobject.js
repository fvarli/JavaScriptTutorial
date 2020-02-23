    var new_date = new Date();
    document.write(new_date);

    document.write("<hr>");

    var new_hour = new_date.getHours();
    document.write(new_hour);

    document.write("<hr>");

    var new_minute = new_date.getMinutes();
    document.write(new_minute);

    document.write("<hr>");

    var create_new_minute = new Date(2018, 12, 2,9, 58, 0);
    document.write(create_new_minute);

    document.write("<hr>");

  /*  function checkage() {
        var birthyear = prompt("Enter your birth year");
        var currentdate = new Date();
        var limitedyear = currentdate.getFullYear() - 18;
        if (birthyear > limitedyear){
            document.write("You can not access the page.");
        }else{
            document.write("Welcome to this page.");
        }
    }
    checkage();

    document.write("<hr>");
    */

    //timekeeper setInterval and  Global/Local variable
   /* var second = 0;

    function timekeeper(){
        var min = Math.floor(second/60);
        var hour = Math.floor(second/3600);
        var min = min%60;
        var sec = second%60;

        document.write(hour + "." + min + "." + sec);
        second++;
        document.write("<br>");
    }

    setInterval("timekeeper()",1000);
    */
