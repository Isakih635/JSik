let counter = 0; // Startvärde

// Hitta element i DOM
const counterDisplay = document.getElementById('counter');
const upButton = document.getElementById('upBtn');
const downButton = document.getElementById('downBtn');

// Räkna upp
upButton.addEventListener('click', function() {
  counter++; // Ökar räknaren med 1
  counterDisplay.textContent = counter.toString(); // Omvandlar talet till en sträng
});

// Räkna ner
downButton.addEventListener('click', function() {
  counter--; // Minskar räknaren med 1
  counterDisplay.textContent = counter.toString(); // Omvandlar talet till en sträng
});
