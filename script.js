let value_entered = document.querySelector("input");
let selected_buttons = document.querySelectorAll("button");
let entered_value = "";

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
    entered_value = value_entered.value;
    value_entered.value = eval(entered_value);
    } else if (event.key === "Backspace") {
        entered_value="";
        value_entered.value = entered_value;
    }
});

for (let btn of selected_buttons) {
    btn.addEventListener("click", function (event) {
    if (event.target.innerHTML == "=") {
        console.log(event);
        value_entered.value = eval(entered_value);

    } else if (event.target.innerHTML == "AC") {
        console.log(event);

        entered_value = "";
        value_entered.value = entered_value;
      // let input=document.querySelector("input");
    
    } else {
        console.log(event);
        entered_value += event.target.innerHTML;
        value_entered.value = entered_value;
    }
    });
}

