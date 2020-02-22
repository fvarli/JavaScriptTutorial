function course(name, code, teacher, date) {
    this.name = name;
    this.code = code;
    this.teacher = teacher;
    this.date = date;
    this.year = year;
}

function year() {
    var x = 2020 - this.date;
    return x;

}

    var course_Math = new course("Math", "101", "Fred", "2008" );
    document.write(course_Math.teacher);
    document.write("<br>");
    document.write(course_Math.year() + " " + "year");