let tg = window.Telegram.WebApp

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cfb37";

let item = "";
let btn1 = document.getElementById('premium-gold');
let btn2 = document.getElementById('sliv-army');
let btn3 = document.getElementById('tiktok-premium');

btn1.addEventListener("click", function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide()
    }
    else {
        tg.MainButton.setText("Вы выбрали а")
        item = "1"
        MainButton.show()
    }
});

btn2.addEventListener("click", function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide()
    }
    else {
        tg.MainButton.setText("Вы выбрали 2")
        item = "2"
        MainButton.show()
    }
});

btn3.addEventListener("click", function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide()
    }
    else {
        tg.MainButton.setText("Вы выбрали 3")
        item = "3"
        MainButton.show()
    }
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
})

let usercard = document.getElementById("usercard")
let p = document.createElement("p")
p.innerText = `${tg.initDataUnsafe.first_name}`
usercard.appendChild(p)