const cart = document.getElementById('cart');
const storageKey = 'save'; // Using 'save' for consistency

function addToCart() {
  const savedData = localStorage.getItem(storageKey);
  let cartData;
  let newEraserCount;

  if (savedData) {
    cartData = JSON.parse(savedData);
    newEraserCount = (cartData.eraserNum || 0) + 1;
    cartData.eraserNum = newEraserCount;
  } else {
    newEraserCount = 1;
    cartData = { eraserNum: newEraserCount };
  }

  localStorage.setItem(storageKey, JSON.stringify(cartData));

  Swal.fire({
    title: "Success",
    text: "Successfully added erasers to cart",
    confirmButtonText: "Ok",
  });
}

cart.addEventListener("click", addToCart);
