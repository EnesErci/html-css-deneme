const basvuru_butonu = document.getElementsByClassName("basvuru-butonu")[0]
const basvuru_formu = document.getElementsByClassName("basvuru-formu")[0]
const basvuru_formu_buton = document.getElementsByClassName("basvuru-formu-buton")[0]

basvuru_butonu.addEventListener("click", (event) => basvuruYap(event))

function basvuruYap(event) {
    event.preventDefault()
    basvuru_formu.style.display = "block"
}

basvuru_formu_buton.addEventListener("click", (event) => basvuruGonder(event))

function basvuruGonder(event) {
    basvuru_formu.style.display = "none"
}


//const => değiştirilmeyecek / let => değiştirilebilir değerler