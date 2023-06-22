let tg = window.Telegram.WebApp;
tg.expand();

let pg_forever = document.getElementById("buy-pg-forever");
let pg_month = document.getElementById("buy-pg-month");
let ttp = document.getElementById("buy-ttp");
let sa = document.getElementById("buy-sa");
let donate = document.getElementById('donate')

pg_forever.addEventListener("click", () => {
    tg.sendData('premium-gold-forever')
    tg.close()
})

pg_month.addEventListener("click", () => {
    tg.sendData('premium-gold-month')
    tg.close()
})

ttp.addEventListener("click", () => {
    tg.sendData('tiktok-premium')
    tg.close()
})

sa.addEventListener("click", () => {
    tg.sendData('slivarmy')
    tg.close()
})

donate.addEventListener("click", () => {
    tg.sendData('slivarmy')
    tg.close()
})