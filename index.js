var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function addToCart(itemName)
  {
    cart.push({'${itemName}': Math.random()},);
    console.log('${item} has been agged to your cart.');
    return cart;
  }

function viewCart()
  {
    for(var i = 0; i < cart.length; i++)
    {
      
    }
  }



function getCart()
  {

  }
