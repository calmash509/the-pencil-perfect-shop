const search = document.getElementById('search');
let searchinput
const items = [
  document.getElementById('airheads'),
  document.getElementById('pencil'),
  document.getElementById('erase'),
  document.getElementById('sharp')
];

function filter() {
  let searchterm = search.value.toLowerCase();
  items.forEach(item => {
    const itemText = item.textContent.toLowerCase();
    if(itemText.includes(searchterm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  })
}


search.addEventListener('input', filter);

document.getElementById('pencil').addEventListener("click", function() {
  window.location.href = "pencils.html";
})

document.getElementById('sharp').addEventListener("click", function() {
  Swal.fire({
    title: "This product is only selling in person.",
    confirmButtonText: "Ok"
  })
})
document.getElementById('erase').addEventListener("click", function() {
  window.location.href = "erasers.html";
});

document.getElementById('airheads').addEventListener("click", function() {
  Swal.fire({
    title: "This product only sells during holidays.",
    confirmButtonText: "Ok"
  });
})
