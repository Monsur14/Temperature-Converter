const textbox = document.getElementById("textbox");
const Convert = document.getElementById("Convert");
const Konvert = document.getElementById("Konvert");
const result = document.getElementById("result");
let temp;

function convert(){
    if(Convert.checked){
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp + "°F";
    }
    else if(Konvert.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp +"°C"
    }
    else{
        result.textContent = "Select a Unit";
    }
}