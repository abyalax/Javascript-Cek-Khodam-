const loaderContainer = document.querySelector(".loader-container");
const cekBtn = document.getElementById("cek-btn");
const result = document.getElementById("result");
const Khodam = [
  "Nyi Roro Kidul","Demit","Palasik","Kuyang","Suster Ngesot","Jerangkong","Hantu Bungkus",
  "Babi Ngepet","Pocong Hidung Panjang","Hantu Lumut","Hantu Jeruk Purut","Mister Gepeng",
  "Genderuwo","Wewe Gombel","Tuyul","Sundel Bolong","Leak","Banaspati","Jelangkung",
  "Hantu Menari","Hantu Siren","Hantu Bola Mata","Hantu Laut Selatan","Hantu Sungai","Hantu Kuburan",
  "kuda bertanduk", "banteng merah", "sapi perah", "manusia kuda", "buaya darat",
  "Hantu Tanjung Priok","Hantu Kom-kom","Hantu Gebug","Jurig","Hantu Blorong","Hantu Telapak Kaki",
  "elang buta", "domba merah muda", "gajah mini", "jerapah pendek",
  "kadal bersayap", "monyet berjenggot", "nenek gayung",  "Pocong", "Kuntilanak",
  "monyet pintar", "kerbau ungu", "koala ambis", "serigala emas",
  "tikus raksasa", "kelinci setia", "penguin darat", "burung hantu",
  "kupu-kupu raksasa", "cacing berkacamata", "katak bernyanyi", "tupai berbaju",
  "harimau bersayap", "beruang lunak", "malaikat tak bersayap", "harimau putih",
  "angsa bersepatu roda", "merpati pintar", "lebah pemalu", "rayap petinju",
  "beruang kutub hangat", "kelelawar berkacamata", "belalang berkostum",
  "ikan paus kecil", "angsa berkacamata", "tikus bersorban", "kelinci berkacamata",
  "kucing ninja", "anjing pemadam", "merak bersepeda", "ayam berjanggut",
  "serigala bersekolah", "gajah pesek", "burung merak emas", "kelinci berbalon",
  "Hantu Peron",
  "Beguganjang","Hantu Air","Hantu Bangku","Si Manis Jembatan Ancol","Silewe","Lampor",
  "kancil bijak", "badak terbang", "ikan bercahaya", "ayam bertopi", "bebek kampung",
  "kucing laut", "burung beo berpuisi", "ikan mujair", "kuda zebra polkadot",
  "Hantu Kelelawar","Orang Bunian","Arwah Gentayangan","Hantu Puncak","Pelesit",
  "hiu bersayap", "anjing kampung", "kucing terbang", "ular berkaki",
];

const form = document.getElementById("text");

function typeWriter(text, elementId, speed = 50) {
  let i = 0;
  function type() {
    if (i < text.length) {
      document.getElementById(elementId).innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Untuk mencegah pengiriman form bawaan browser
  // Kosongkan elemen sebelum menambahkan teks baru
  result.innerHTML = '';

  // Lakukan apa yang perlu dilakukan ketika form disubmit
  const inputValue = form.querySelector("input").value;
  console.log("Nama yang dimasukkan:", inputValue);
  if (inputValue === "") {
    alert("Namamu siapa sayang ???")
    return false;
  }
  loaderContainer.classList.add("active");
  setTimeout(() => {
    loaderContainer.classList.remove("active");
    const randomKhodam = getRandomElementFromArray(Khodam);
    const typingText = "Wahh menarik, " + inputValue +" khodam dalam diri anda adalah " + randomKhodam;

    result.innerHTML = '<p id="typing"></p>';
    typeWriter(typingText, "typing");

    console.log(randomKhodam);
  }, 6000);
});

function getRandomElementFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
