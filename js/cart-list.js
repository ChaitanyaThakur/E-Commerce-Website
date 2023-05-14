function renderCartItems(){
    const cartItems = getAllItemsCart();

    let totalPrice = 0;
    let totalDiscount =0;
    let prev = "";
    const cards = cartItems.reduce((prev,curr)=>{
        // prev = "";
        totalPrice  = curr.price * curr.qty;
        totalDiscount = (+curr.price - curr.priceAfterDiscount) * curr.qty;
        console.log(curr);
        
        return prev + `<div class="cartCard">
        <div class="d-flex">
            <img src="./images/${curr.imageName}.png">
        </div>
        <div class="cartCardText">
        <h2>${curr.name}</h2>
        <h3>Price: ${curr.price}</h3>
        <h3>DiscountedPrice: ${curr.priceAfterDiscount}</h3>
        <div class="d-flex">
            <button onclick="decreementQty(${curr.id})">-</button>
            <div>${curr.qty}</div>
            <button onclick="increementQty(${curr.id})">+</button>
        </div>
        </div>
    </div>`
    },'')

    document.getElementById('cart-card-wrapper').innerHTML=cards;
    console.log(cards)
    document.getElementById('total-price').innerHTML=Math.floor(totalPrice);
    document.getElementById('total-discount').innerHTML=Math.floor(totalDiscount);
    document.getElementById('final-price').innerHTML=Math.floor(totalPrice-totalDiscount);

}

function increementQty(id){
    
    renderCartItems();
}

function decreementQty(id){
    decreementQty(id);
    renderCartItems();
}

function removeFromCart(id){
    removeFromCart(id);
    renderCartItems();
}

renderCartItems();