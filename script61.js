function myfunc() {

    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("B1").value;
    b2 = document.getElementById("B2").value;
    b3 = document.getElementById("B3").value;
    b4 = document.getElementById("B4").value;
    b5 = document.getElementById("B5").value;
    b6 = document.getElementById("B6").value;
    b7 = document.getElementById("B7").value;
    b8 = document.getElementById("B8").value;
    b9 = document.getElementById("B9").value;

    if (b1.tolowerCase() == "x" && b2.tolowerCase() == "x" && b3.tolowerCase() == "x"){
        window.alert("You are a winner");
        reset();
    } else if (b4.tolowerCase()== "x" && b5.tolowerCase() == "x" && b6.tolowerCase() == "x"){
        window.alert("You are a winner");
        reset();
    } else if (b7.tolowerCase()== "x" && b8.tolowerCase() == "x" && b9.tolowerCase() == "x"){
        window.alert("You are a winner");
        reset();
    }else if (b1.tolowerCase()== "x" && b4.tolowerCase() == "x" && b7.tolowerCase() == "x"){
        window.alert("You are a winner");
        reset();
    } else if (b2.tolowerCase()== "x" && b5.tolowerCase() == "x" && b8.tolowerCase() == "x"){
        window.alert("You are a winner");
        reset();
    } else if (b3.tolowerCase()== "x" && b6.tolowerCase() == "x" && b9.tolowerCase() == "x"){
        window.alert("You are a winner");
        reset();
    }else if (b1.tolowerCase()== "x" && b5.tolowerCase() == "x" && b9.tolowerCase() == "x"){
        window.alert("You are a winner");
        reset();
    }else if (b3.tolowerCase()== "x" && b5.tolowerCase() == "x" && b7.tolowerCase() == "x"){
        window.alert("You are a winner");
        reset();
    }

    if (b1.tolowerCase() == "0" && b2.tolowerCase() == "0" && b3.tolowerCase() == "0") {
            window.alert("You are a winner");
            reset();
    } else if (b4.tolowerCase() == "0" && b5.tolowerCase() == "0" && b6.tolowerCase() == "0") {
        window.alert("You are a winner");
        reset();
    } else if (b7.tolowerCase() == "0" && b8.tolowerCase() == "0" && b9.tolowerCase() == "0") {
        window.alert("You are a winner");
        reset();
    } else if (b1.tolowerCase() == "0" && b4.tolowerCase() == "0" && b7.tolowerCase() == "0") {
        window.alert("You are a winner");
        reset();
    } else if (b2.tolowerCase() == "0" && b5.tolowerCase() == "0" && b8.tolowerCase() == "0") {
        window.alert("You are a winner");
        reset();
    } else if (b3.tolowerCase() == "0" && b6.tolowerCase() == "0" && b9.tolowerCase() == "0") {
        window.alert("You are a winner");
        reset();
    } else if (b1.tolowerCase() == "0" && b5.tolowerCase() == "0" && b9.tolowerCase() == "0") {
        window.alert("You are a winner");
        reset();
    } else if (b3.tolowerCase() == "0" && b5.tolowerCase() == "0" && b7.tolowerCase() == "0") {
        window.alert("You are a winner");
        reset();
    }
}
function reset() {
    location.reload();
    document.getElementById("b1").value = "";
    document.getElementById("b2").value = "";
    document.getElementById("b3").value = "";
    document.getElementById("b4").value = "";
    document.getElementById("b5").value = "";
    document.getElementById("b6").value = "";
    document.getElementById("b7").value = "";
    document.getElementById("b8").value = "";
    document.getElementById("b9").value = "";
}

let flag = 1;
function setValue() {
    if (flag == 1) {
        this.value = "x";
        thsi.disabled = true;
        flag = 0;
    } else {
        this.value = "0";
        thsi.disabled = true;
        flag = 1;
    }
}