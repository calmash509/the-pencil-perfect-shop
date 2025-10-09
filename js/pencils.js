const cartButton = document.getElementById('cart');
const storageKey = 'save'; // Using the same key as the eraser

function addToCart() {
  const savedData = localStorage.getItem(storageKey);
  let cartData;
  let newPencilCount;

  if (savedData) {
    cartData = JSON.parse(savedData);
    newPencilCount = (cartData.pencilNum || 0) + 1;
    cartData.pencilNum = newPencilCount;
  } else {
    newPencilCount = 1;
    cartData = { pencilNum: newPencilCount };
  }

  localStorage.setItem(storageKey, JSON.stringify(cartData));

  Swal.fire({
    title: "Success",
    text: "Successfully added pencils to cart",
    confirmButtonText: "Ok",
  });
}

cartButton.addEventListener("click", addToCart);

