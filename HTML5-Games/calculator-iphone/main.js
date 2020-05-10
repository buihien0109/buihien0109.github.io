$(document).ready(function () {
    let exp = "";
    let result = "";
    let resultInput = $(".screen-calculator");
    let timeOut

    $(".num__input").click(function () {
        let char = $(this).attr("char");
        exp += char;
    });

    $(".enter").click(function () {
        try {
            result = eval(exp);
            equalValue();
            updateExpResult();
        } catch {
            resultInput.text('Error');
        }
    });

    $(".clear").click(function () {
        resetExpInput();
        resetExpResult();
    });

    $(".switch").click(function () {
        resetExpInput();
        if (result == 0) {
            result = exp * -1;
        } else {
            result *= -1;
        }
        equalValue();
        updateExpResult();
    });
    $(".percent").click(function () {
        result /= 100;
        equalValue();
        updateExpResult();
    });

    //Function effect
    function updateExpResult() {
        resultInput.text(result);
    }
    function resetExpInput() {
        exp = "";
    }
    function resetExpResult() {
        resultInput.text("");
    }
    function equalValue() {
        exp = result;
    }

    //set clock
    let time = getTime();
    $(".time").text(time);

    //set time suggest
    setTime(5000);
});

$(".show-iphone").click(function () {
    clearTimeout(timeOut)
    $(".calculator").addClass("show");
    $(".iphone__ui").addClass("hide");
});

$(".btn_back-home").click(function () {
    $(".calculator").removeClass("show");
    $(".iphone__ui").removeClass("hide");
});

function getTime() {
    let date, hour, minute, time;
    date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;

    if (hour > 12) {
        hour = hour - 12;
        time = `${hour}:${minute} PM`;
    } else {
        time = `${hour}:${minute} AM`;
    }

    return time;
}

function setTime(time) {
    timeOut = setTimeout(() => {
        $(".talkbubble1").addClass("hide-talkbubble");
        $(".talkbubble2").removeClass("hide-talkbubble");
        setTimeout(() => {
            $(".talkbubble2").addClass("hide-talkbubble");
        }, time);
    }, time);
}
