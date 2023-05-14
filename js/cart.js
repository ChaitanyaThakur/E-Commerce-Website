
    function addToCart(product){
        let newProduct = product;

        if(typeof product === "string"){
            newProduct = JSON.parse(decodeURI(product));
        }

        const myCartItems = this.getAllItemsCart()
        const filterItem = myCartItems.filter(item => item.id === newProduct.id);

        if(filterItem.length==1){
            filterItem[0].qty+=1;
        }else{
            myCartItems.push({
                ...newProduct,
                qty:1
            });
        }

        localStorage.setItem('MY_CART',JSON.stringify(myCartItems));

    }
    function removeFromCart(id){
        const myCartItems = this.getAllItemsCart()
        const filterItem = myCartItems.filter(item => item.id !== id);

        localStorage.setItem('MY_CART', JSON.stringify(filterItem));

    }
    function getAllItemsCart(){
        return JSON.parse(localStorage.getItem('MY_CART')) || [];

    }
    function  removeAllItems(){
        localStorage.removeItem('MY_CART')
    }
    function increementQty(id){

        const myCartItems = this.getAllItemsCart()
        const filterItem = myCartItems.filter(item => item.id == id);

        if(filterItem.length==1 && filterItem[0].qty<10){
            filterItem[0].qty+=1;
        }

        localStorage.setItem('MY_CART', JSON.stringify(myCartItems));
    }
    function decreementQty(id){

        const myCartItems = this.getAllItemsCart()
        const filterItem = myCartItems.filter(item => item.id == id);

        if(filterItem.length==1 && filterItem[0].qty>1){
            filterItem[0].qty-=1;
        }

        localStorage.setItem('MY_CART', JSON.stringify(myCartItems));

    }


