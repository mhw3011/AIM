
 
const product = [
    {
        id: 0,
        image: 'https://m.media-amazon.com/images/I/71AL8MAJ+BL._UX695_.jpg',
        title: 'Nike Mens Zoom Freak 3 Running Shoe',
        price: 220,
    },
    {
        id: 1,
        image: 'https://m.media-amazon.com/images/I/81BsfYlatgL._UX695_.jpg',
        title: 'Adidas Unisex-Adult Harden Stepback 3 Shoe',
        price: 160,
    },
    {
        id: 2,
        image: 'https://m.media-amazon.com/images/I/712VkjGy3qL._UX575_.jpg',
        title: 'Nike Mens Air Max 270 Running Shoes',
        price: 690,
    },
    {
        id: 3,
        image: 'https://m.media-amazon.com/images/I/71j1v4EYuQL._UX695_.jpg',
        title: 'Nike Mens Zoomx Vaporfly Next% 2 Running Shoe',
        price: 800,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}
