const checkboxPricing = document.getElementById('checkboxPricing');
const price = document.getElementsByClassName('text__signal');

for (let i = 0; i < price.length; i++) {
  checkboxPricing.addEventListener('click', function () {
    if (checkboxPricing.checked) {
      price[i].classList.toggle('price__hidden');
    } else {
      price[i].classList.toggle('price__hidden');
    }
  });
}
