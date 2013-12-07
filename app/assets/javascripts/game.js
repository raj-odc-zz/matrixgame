
var curr = 1;
var t;
var count = 0;
var a=0;
var limit_matrix;
var random_gen = [];
var clicked_no = [];

function timedCount(limit) {
    selectedlevel = document.getElementById("level_id").value
    if (selectedlevel=="")
    {  alert("Please select the level")
        return false     }
    limit_matrix = limit || limit_matrix;
    count = count + 1
    a = randominterval(1,limit_matrix)
    prev = curr
    curr = a;

    var property=document.getElementById("btnuser_" + prev);
    property.style.backgroundColor = "#B3B1B0";

    var property=document.getElementById("btnuser_" + curr);
    property.style.backgroundColor = "#21f471";

    if (count == (parseInt(selectedlevel)+1)) {
        $('#random_value_generated').val(random_gen);
        var property=document.getElementById("btnuser_" + curr);
        property.style.backgroundColor = "#B3B1B0";
        clearTimeout(t);
        curr = 1;
        t;
        count = 0;
        a=0;
        random_gen = []
        clicked_no = []
        alert("Please clicks on the blocks which green highlighted")
        return false;
    }
    else
    {
        random_gen.push(parseInt(curr))
    }
    t = setTimeout(function () {
        var property=document.getElementById("btnuser_" + prev);
        property.style.backgroundColor = "#B3B1B0";
        timedCount();
    }, 400);

}

// function for finding intervals for randomly select color
function randominterval(from,to)
{
    return Math.floor(Math.random()*(to-from+1)+from);
}


// reload the view for the row and column

function update_matrix_div(matrix_id) {
    $.ajax({
        url: "user/show",
        type: "GET",
        data: {"matrix_id" : matrix_id},
        success: function(data) {
            jQuery("#versionsDiv").html(data);
        }
    });
}

// user answers the enabled color

function btnColor(btn,color,numberclick){
    selectedlevel = document.getElementById("random_value_generated").value
    if (selectedlevel=="")
    {  alert("Please press start game button")
        return false     }
    var property=document.getElementById(btn);
    property.style.backgroundColor=color;
    clicked_no.push(parseInt(numberclick))
    $('#user_clicked').val(clicked_no);
}



