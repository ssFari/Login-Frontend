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


// Menambahkan event listener untuk swipe up pada elemen 1
element1.addEventListener("touchstart", function(event) {
  var startY = event.touches[0].clientY;

  element1.addEventListener("touchend", function(event) {
    var endY = event.changedTouches[0].clientY;
    var swipeUp = startY - endY;
    console.log(swipeUp);
    if (swipeUp > 300) {
      // Logika untuk swipe up pada elemen 1
      element1.classList.add("swipe-active");
    }
  });
});

// Menambahkan event listener untuk swipe down pada elemen 2
element2.addEventListener("touchstart", function(event) {
  var startY = event.touches[0].clientY;

  element2.addEventListener("touchend", function(event) {
    var endY = event.changedTouches[0].clientY;
    var swipeDown = endY - startY;
    console.log(swipeDown);
    if (swipeDown > 300) {
      // Logika untuk swipe down pada elemen 2
      element1.classList.remove("swipe-active")
    }
  });
});


//Mendapatkan elemen form
var form = document.getElementsByClassName("main-form");

// Menambahkan event listener untuk mencegah penghapusan elemen 1 saat menyentuh form
form.addEventListener("touchstart", function(event) {
  event.preventDefault();
});
