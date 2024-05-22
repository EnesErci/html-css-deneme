const basvuru_butonu = document.getElementsByClassName("basvuru-butonu")[0];
const basvuru_formu = document.getElementsByClassName("basvuru-formu")[0];
const basvuru_formu_buton = document.getElementsByClassName(
  "basvuru-formu-buton"
)[0];

basvuru_butonu.addEventListener("click", (event) => basvuruYap(event));

function basvuruYap(event) {
  event.preventDefault(); //sayfanın yenilenmesini önler
  basvuru_formu.style.display = "block";
}

basvuru_formu_buton.addEventListener("click", (event) => basvuruGonder(event));

function basvuruGonder(event) {
  basvuru_formu.style.display = "none";
}

const girisyap_butonu = document.getElementById("girisyapbutonu");
const girisyap_formu = document.getElementsByClassName("girisyap")[0];
const girisyap_formu_buton =
  document.getElementsByClassName("girisyapformbutonu")[0];

girisyap_butonu.addEventListener("click", (event) => girisYap(event));

function girisYap(event) {
  event.preventDefault(); //sayfanın yenilenmesini önler
  girisyap_formu.style.display = "block";
}

girisyap_formu_buton.addEventListener("click", (event) => oturumAc(event));

function oturumAc(event) {
  event.preventDefault();
  girisyap_formu.style.display = "none";
}

//leftbar liste elemanları
const muhasebe_liste_elemani = document.getElementById(
  "muhasebe_liste_elemani"
);
const turizmveseyahat_liste_elemani = document.getElementById(
  "turizmveseyahat_liste_elemani"
);
const guvenlik_liste_elemani = document.getElementById(
  "guvenlik_liste_elemani"
);
const kimyavegida_liste_elemani = document.getElementById(
  "kimyavegida_liste_elemani"
);
const muhendis_liste_elemani = document.getElementById(
  "muhendis_liste_elemani"
);
const lojistik_liste_elemani = document.getElementById(
  "lojistik_liste_elemani"
);

//anasayfa kategori
const default_kategori = document.getElementById("default");
const muhasebe_kategori = document.getElementById("muhasebe");
const lojistik_kategori = document.getElementById("lojistik");
const muhendis_kategori = document.getElementById("muhendis");
const guvenlik_kategori = document.getElementById("guvenlik");
const turizmveseyahat_kategori = document.getElementById("turizmveseyahat");
const kimyavegida_kategori = document.getElementById("kimyavegida");

//ilanlar
const muhasebe_ilani = document.getElementsByClassName("muhasebe_ilani");
const lojistik_ilani = document.getElementsByClassName("lojistik_ilani");
const muhendis_ilani = document.getElementsByClassName("muhendis_ilani");
const guvenlik_ilani = document.getElementsByClassName("guvenlik_ilani");
const turizmveseyahat_ilani = document.getElementsByClassName(
  "turizmveseyahat_ilani"
);
const kimyavegida_ilani = document.getElementsByClassName("kimyavegida_ilani");

muhasebe_liste_elemani.addEventListener("click", (event) =>
  muhasebeIlanlari(event)
);
lojistik_liste_elemani.addEventListener("click", (event) =>
  lojistikIlanlari(event)
);
muhendis_liste_elemani.addEventListener("click", (event) =>
  muhendisIlanlari(event)
);
guvenlik_liste_elemani.addEventListener("click", (event) =>
  guvenlikIlanlari(event)
);
turizmveseyahat_liste_elemani.addEventListener("click", (event) =>
  turizmVeSeyahatIlanlari(event)
);
kimyavegida_liste_elemani.addEventListener("click", (event) =>
  kimyaVeGidaIlanlari(event)
);

function showCategory(category, ilanlar) {
  // Hide all categories
  default_kategori.style.display = "none";
  muhasebe_kategori.style.display = "none";
  lojistik_kategori.style.display = "none";
  muhendis_kategori.style.display = "none";
  guvenlik_kategori.style.display = "none";
  turizmveseyahat_kategori.style.display = "none";
  kimyavegida_kategori.style.display = "none";

  // Hide all ilanlar
  hideAllIlanlar();

  // Show selected category and ilanlar
  category.style.display = "block";
  Array.from(ilanlar).forEach((ilan) => {
    ilan.style.display = "block";
  });
}

function hideAllIlanlar() {
  const allIlanlar = [
    ...muhasebe_ilani,
    ...lojistik_ilani,
    ...muhendis_ilani,
    ...guvenlik_ilani,
    ...turizmveseyahat_ilani,
    ...kimyavegida_ilani,
  ];
  allIlanlar.forEach((ilan) => {
    ilan.style.display = "none";
  });
}

function muhasebeIlanlari(event) {
  event.preventDefault();
  showCategory(muhasebe_kategori, muhasebe_ilani);
}

function lojistikIlanlari(event) {
  event.preventDefault();
  showCategory(lojistik_kategori, lojistik_ilani);
}

function muhendisIlanlari(event) {
  event.preventDefault();
  showCategory(muhendis_kategori, muhendis_ilani);
}

function guvenlikIlanlari(event) {
  event.preventDefault();
  showCategory(guvenlik_kategori, guvenlik_ilani);
}

function turizmVeSeyahatIlanlari(event) {
  event.preventDefault();
  showCategory(turizmveseyahat_kategori, turizmveseyahat_ilani);
}

function kimyaVeGidaIlanlari(event) {
  event.preventDefault();
  showCategory(kimyavegida_kategori, kimyavegida_ilani);
}
