let tg = window.Telegram.WebApp;
tg.expand();

let pg_forever = document.getElementById("buy-pg-forever");
let pg_month = document.getElementById("buy-pg-month");

pg_forever.addEventListener("click", () => {
    tg.sendData('asdsad')
    tg.close()
})

// Telegram.WebApp.onEvent("mainButtonClicked", function(){
//     tg.sendData()
// })