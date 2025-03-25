const discountButton = document.getElementById('discount-coupon');

discountButton.addEventListener('click',() =>{
    const discountText = discountButton.innerText;
    const textArea = document.createElement('textarea');
    textArea.value =discountText;
    document.body.appendChild(textArea);
    textArea.select();
    textArea.setSelectionRange(0,99999);

    document.execCommand('copy');
    document.body.removeChild(textArea);

    discountButton.textContent="Copied!"

    setTimeout(()=>{
        discountButton.textContent =discountText;
    },2000);
}
)

const couponButton = document.getElementById('coupon-button');
const purchaseButton = document.getElementById('purchase-button');
const totalPrice = document.getElementById('total-price');
const discountElement = document.getElementById('total-discount');
const finalPrice = document.getElementById('price-after-discount');
const cartItemContainer = document.getElementById('cart-item');
const couponInput = document.getElementById('coupon-code');
