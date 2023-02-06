var element1 = document.querySelector("#element1");
var element2 = document.querySelector("#element2");

// Memeriksa ukuran layar saat ini
var screenWidth = window.innerWidth;

if (screenWidth <= 768) {
  // Menambahkan event listener untuk tombol swipe up dan swipe down
  document.querySelector('.swipe-up').addEventListener('click', function(){
    element1.classList.add("swipe-active");
  });
  document.querySelector('.swipe-down').addEventListener('click', function(){
    element1.classList.remove("swipe-active");
  });

  // Menambahkan event listener untuk detect swipe pada mouse
  document.addEventListener('mousedown', startSwipe);
  document.addEventListener('mouseup', endSwipe);
}

// Fungsi untuk mendeteksi awal dari swipe
function startSwipe(event) {
  xDown = event.clientX;
  yDown = event.clientY;
}

// Fungsi untuk mendeteksi akhir dari swipe dan mengeksekusi fungsi swipe
function endSwipe(event) {
  xUp = event.clientX;
  yUp = event.clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;


  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      // Swipe left
    } else {
      // Swipe right
    }
  } else {
    if (yDiff > 100) {
      // Swipe up
      element1.classList.add("swipe-active");
    } else if(yDiff < -100){
      element1.classList.remove("swipe-active")
    }
  }
}



/** 
 * Create Account
 */
// Load file JSON

document.addEventListener("DOMContentLoaded",function(){
  const oForm = document.querySelector(".main-form");
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");
  const checkPasswordInput = document.querySelector("#checkPassword");
  const submitButton = document.querySelector("#submitSigup");

  let accounts = [];

  function loadAccountsFromLocalStorage() {
    const data = localStorage.getItem("accounts");
    if (data) {
      accounts = JSON.parse(data);
    }
  }

  function saveAccountsToLocalStorage() {
    localStorage.setItem("accounts", JSON.stringify(accounts));
  }

  oForm.addEventListener("submit", (event) => {
    event.preventDefault();

    loadAccountsFromLocalStorage();

    const email = emailInput.value;
    const password = passwordInput.value;
    const checkPassword = checkPasswordInput.value;

    // Cek apakah password dan checkPassword cocok
    if (password !== checkPassword) {
      alert("Password dan konfirmasi password tidak cocok");
      return;
    }

    // Cek apakah email sudah terdaftar
    const existingAccount = accounts.find((account) => account.email === email);
    if (existingAccount) {
      alert("Email sudah terdaftar");
      return;
    }

    // Tambah account baru ke daftar accounts
    accounts.push({ email, password });
    saveAccountsToLocalStorage();

    alert("Berhasil membuat account");
    window.location.href = "index.html";

  });
})




  // login

  const gform = document.querySelector(".main-form");
  gform.addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // retrieve the data from local storage
    const accounts = JSON.parse(localStorage.getItem("accounts"));

    // check if the email and password match any account in local storage
    const account = accounts.find(
      account => account.email === email && account.password === password
    );

    if (account) {
      // if match, set the session and redirect to index page
      sessionStorage.setItem("user", JSON.stringify(account));
      window.location.href = "dashboard.html";
    } else {
      // if not match, show an error message
      alert("Email or password is incorrect.");
    }
  });
