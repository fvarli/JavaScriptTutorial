//var y = document.forms[0].length;
var x = document.Survey_Area.elements[3].value;
alert(x);

function checker() {
    var length_area = document.Survey_Area.length;
    var list = new Array();
    for (var i = 0; i <length_area; i++ ){
        if(document.Survey_Area.elements[i].checked == true){

                list.push(document.Survey_Area.elements[i].value);
            }else{
                list=list;
            }
        }
    alert("Here is the list that you selected:" + " " + list.join());
    }