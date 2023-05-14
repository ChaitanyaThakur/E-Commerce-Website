// get products data

// import cart from './cart.js';

let productsListUrl = '/products.json';

async function loadProducts(productsListUrl) {
    /* The keyword "async" before a function makes the function return a promise: 
            Events happening at different time and do not depend on each other.*/

    fetch(productsListUrl)
        .then(response => response.json())
        .then(data => {
            const products = data.Products;
            console.log(products)

            /* The fetch() method in JavaScript is used to request to the server and load the information on the webpages.
            The request, that return the data of the format JSON or XML. 
            This method returns a promise. We then need to resolve the promise based on value or error.
                Without options, Fetch will always act as a get request.
                Post requests can be made using fetch by giving options as given below:*/


            let cards = '';
            products.forEach(product => {
                let isNewDiv = '';
                if (product.isNew === 'TRUE') {
                    isNewDiv = `<div class="new-product">
                                    <span>New</span>
                                </div>`;
                }

                let stars = '';
                const ratings = Math.floor(+product.ratings);
                for (let i = 1; i <= 5; i++) {
                    if (i <= ratings) {
                        stars = stars + '<i class="fa fa-star checked"></i>';
                    } else {
                        stars = stars + '<i class="fa fa-star-o"></i>';
                    }
                }

                cards = cards +
                    `<div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="single-product" id="${product.id}">
                            <div class="product-img">
                                <img src="images/${product.imageName}.png" alt="">
                                <div class="product-hover">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-4">
                                                <div onclick="addToCart('${encodeURI(JSON.stringify(product))}')" class="product-icon product-cart-icon"></div>
                                            </div>
                                            <div class="col-4">
                                                <div class="product-icon product-view-icon"></div>  
                                            </div>
                                            <div class="col-4">
                                                <div onclick="addToCart('${encodeURI(JSON.stringify(product))}')" class="product-icon product-wishlist-icon"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ${isNewDiv}
                            </div>
                            <div class="product-caption">
                                <div class="product-rating">
                                    ${stars}
                                </div>
                                <h4><a href="#">${product.name}</a></h4>
                                <div class="price">
                                    <ul>
                                        <li>$${product.priceAfterDiscount}</li>
                                        <li class="discount">$${product.price}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>`;
            });

            document.querySelector('#productsListArea').innerHTML = cards;
            /*queryselector - method returns the first element that matches a CSS selector.
                            - we can add class or id name, querySelector('#id_name) OR querySelector('.class_name') */
        });
}


loadProducts(productsListUrl);   