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
let itemlist =[];
let total=0;
let discount=0;
couponButton.disable=true;
purchaseButton.disable=true;
function addItem(item,price){
    itemlist.push({name:item,price:price});
    total+=price;
    updatePrice();
}
function removeItem(item){
    if(index >= 0 && index<itemlist.length){
        total -= itemlist[index].price;
        itemlist.splice(index,1);
        updatePrice();
    }
}
function updatePrice(){
    totalPrice.innerText=total.toFixed(2);
        discountElement.innerText=discount.toFixed(2);
        finalPrice.innerText=(total-discount).toFixed(2);
        couponButton.disabled=total<30000;
        purchaseButton.disabled=total==0;
        renderList();

        
    
}
function renderList(){
    cartItemContainer.innerHTML='';
    itemlist.forEach((item,index)=>{
        cartItemContainer.innerHTML+=`<div class ="flex items-center justify-between">
        <span>${index+1}.${item.name}</span>
        <i onclick="removeItem(${index}" class="fa-solid fa-close text-xl mt-1 cursor-pointer
        font-semibold text-red-600"</div>`
    })
}
couponButton.addEventListener('click',()=>{
    const couponCode =couponInput.value.trim();
    if(couponCode==="DISCOUNT30"&& total>=30000){
        discount=total*0.30;
    }
    else{
        discount=0;

    }
    updatePrice();

  
})
purchaseButton.addEventListener('click',()=>{
    itemlist=[];
    total=0;
    discount=0;
    couponInput.value='';
    updatePrice();
})