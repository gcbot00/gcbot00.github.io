let tg = window.Telegram.WebApp

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cfb37";

let item = "";
let btn1 = document.getElementById('premium-gold');
let btn2 = document.getElementById('sliv-army');
let btn3 = document.getElementById('tiktok-premium');

// let usercard = document.getElementById("usercard")
// let p = document.createElement("p")
// // p.innerText = `${tg.initDataUnsafe.user.first_name}`
// p.innerText = `${item}`
// usercard.appendChild(p)

btn1.addEventListener("click", function(){
    p.innerText = '1111'
    usercard.appendChild(p)
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

