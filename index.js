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

function addToCart(name)
  {

  }

function viewCart()
  {

  }

function removeFromCart()
    {

    }
function placeOrder(number)
  {
    if(number == "" || number == " ")
      {
        print "Sorry, we don't have a credit card on file for you.";
      }
  }
