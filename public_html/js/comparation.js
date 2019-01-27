



function comparison() {
    var firstNumber = document.getElementById("first").value;
    var secondNumber = document.getElementById("second").value;
    var result = document.getElementById("answer");
    if (firstNumber == "" || secondNumber == "") {
        result.innerHTML = "Please fill out all fields!";
    }else{   
        if (firstNumber > secondNumber) {
            result.innerHTML = "First number is bigger than second number";
        } else if (firstNumber < secondNumber) {
            result.innerHTML = "Second number is bigger than first number";
        } else {
            result.innerHTML = "First and second numbers are same";
        }
    }

}