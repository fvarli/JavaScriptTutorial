    //Array Example
    var course_list = new Array("Python"," Java", " C#", " Matlab", " PHP");

    var framework_list = new Array("CodeIgniter", "Laravel", "Symfony");
    document.write(course_list[2]);

    document.write("<hr>");

    //Length and for Loop
    var length = course_list.length;

    document.write("Length of the array is" + " " + length);

    document.write("<hr>");

    for (var i=0; i<course_list.length; i++){
        document.write(course_list[i]);
        document.write("<br>");

    }

    document.write("<hr>");

    //Join and Concat
    document.write(course_list.join());
    document.write("<hr>");

    var courses = Array();
    courses[0] = course_list[4];
    courses[1] = framework_list[0];
    courses[2] = framework_list[1];
    courses[3] = framework_list[2];

    document.write(courses);

    document.write("<br>");
    document.write("<br>");

    document.write(framework_list.concat(course_list).join());

    document.write("<hr>");

    //Sort, Pop and Push

    //Sort
    var sortcourses = courses.sort();
    document.write(sortcourses.join());

    document.write("<hr>");

    //Pop
    sortcourses.pop();
    document.write(sortcourses.join());

    document.write("<hr>");

    //Push
    sortcourses.push("Python","Django");
    document.write(sortcourses.join());

    document.write("<hr>");

    //Prompt
  /*  var list = new Array();

    for (var i=0; i<5; i++ ){

        var y = prompt("Please enter" + " " + i + " " + "command");
        list[i] = y;
    }

    document.write(list.join());

    document.write("<hr>");
*/
