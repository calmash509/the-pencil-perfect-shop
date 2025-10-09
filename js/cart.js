const erasernumsInput = document.getElementById('eraserNum');
const eraserPrice = document.getElementById('eraserPrice');
const pencilnumsInput = document.getElementById('pencilNum');
const pencilPrice = document.getElementById('pencilPrice');
const storageKey = 'save';
const eraserCost = 0.50;
const pencilCost = 0.25;

function updateUI() {
  const savedData = localStorage.getItem(storageKey);
  let erasers = 0;
  let pencils = 0;

  if (savedData) {
    const parsedData = JSON.parse(savedData);
    erasers = parsedData.eraserNum || 0;
    pencils = parsedData.pencilNum || 0;
  }

  erasernumsInput.value = erasers;
  eraserPrice.textContent = `$${(erasers * eraserCost).toFixed(2)}`;
  pencilnumsInput.value = pencils;
  pencilPrice.textContent = `$${(pencils * pencilCost).toFixed(2)}`;
}

updateUI();

window.addEventListener('storage', (event) => {
  if (event.key === storageKey) {
    updateUI();
  }
});

erasernumsInput.addEventListener('input', function() {
  const savedData = localStorage.getItem(storageKey);
  const cartData = savedData ? JSON.parse(savedData) : {};
  const newEraserCount = parseInt(this.value, 10) || 0;
  cartData.eraserNum = newEraserCount;
  localStorage.setItem(storageKey, JSON.stringify(cartData));
  eraserPrice.textContent = "$" + newEraserCount * eraserCost
});

pencilnumsInput.addEventListener('input', function() {
  const savedData = localStorage.getItem(storageKey);
  const cartData = savedData ? JSON.parse(savedData) : {};
  const newPencilCount = parseInt(this.value, 10) || 0;
  cartData.pencilNum = newPencilCount;
  localStorage.setItem(storageKey, JSON.stringify(cartData));
  pencilPrice.textContent = "$" + newPencilCount * pencilCost
});


const items = [
  document.getElementById('sharp'),
  document.getElementById('pencil'),
  document.getElementById('eraser'),
];



