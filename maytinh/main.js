$(".number").click(function() {
    var number = $(this).text();
    $("#result").val(function(n, c) {
        return c + number;
    });
});

function reset() {
    $("#result").val("");
}

function result() {
    $("#result").val(eval($("#result").val()));
}

function percent() {
    var y = $("#result").val();
    $("#result").val(eval(y / 100));
}

function radic() {
    var y = $("#result").val();
    $("#result").val(Math.sqrt(y));
}

function Square() {
    var y = $("#result").val();
    $("#result").val(y * y);
}

function factorial(a) {
    var x = 1;
    var a = $("#result").val();
    for (var i = 1; i <= a; i = i + 1) {
        x = x * i;
    }
    $("#result").val(x);
}