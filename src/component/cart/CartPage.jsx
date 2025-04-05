import React, { useContext, useEffect, useState } from "react";
import CartList from "./CartList";
import CartSummary from "./CartSummary";
import api from '../../api'
import { CartContext } from "../../context/CartContext";

const CartPage = () => {
  // const [cartItems, setCartItems] = useState([
  //   {
  //     id: 1,
  //     name: "Camera Canon EOS M50 Kit",
  //     image: "./images/items/11.jpg",
  //     details: "Matrix: 25 Mpx | Brand: Canon",
  //     quantity: 1,
  //     unitPrice: 315.20,
  //     totalPrice: 1156.00,
  //   },
  //   {
  //     id: 2,
  //     name: "ADATA Premier ONE microSDXC",
  //     image: "./images/items/10.jpg",
  //     details: "Size: 256 GB | Brand: ADATA",
  //     quantity: 1,
  //     unitPrice: 75.00,
  //     totalPrice: 149.97,
  //   },
  //   {
  //     id: 3,
  //     name: "Logitec headset for gaming",
  //     image: "./images/items/9.jpg",
  //     details: "Version: CUH-ZCT2E | Brand: Sony",
  //     quantity: 1,
  //     unitPrice: 578.00,
  //     totalPrice: 98.00,
  //   },
  // ]);

  // const handleRemove = (id) => {
  //   setCartItems(cartItems.filter((item) => item.id !== id));
  // };

  // const handleQuantityChange = (id, newQuantity) => {
  //   if (newQuantity < 1) return;
  //   setCartItems(
  //     cartItems.map((item) =>
  //       item.id === id
  //         ? { ...item, quantity: newQuantity, totalPrice: newQuantity * item.unitPrice }
  //         : item
  //     )
  //   );
  // };

  // const totalPrice = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  // const tax = totalPrice * 0.1; // Example 10% tax
  const { setNumberOfItems, numberOfItems } = useContext(CartContext);
  const [cartItems, setCartItems] = useState([])
  const cart_code = localStorage.getItem('cart_code');
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(function () {
    api.get(`cart/get_cart?cart_code=${cart_code}`)
      .then(res => {
        console.log(res.data)
        setCartItems(res.data.items)
        setTotalPrice(res.data.total_price)
      })
      .catch(err => console.log(err.message))
  }, [])

  // Recalculate the total price of the entire cart
  const calculateTotalPrice = () => {
    const total = cartItems.reduce((acc, item) => acc + item.item_price, 0)
    return total;
  };

  const total = calculateTotalPrice();
  const tax = 0.10 * total;
  const taxRounded = tax.toFixed(2);
  const roundedTotal = total.toFixed(2);
  const taxIncludedTotal = (parseFloat(taxRounded) + parseFloat(roundedTotal)).toFixed(2);

  // Handle and reflect quantity change
  const updateQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          // Update the item price and quantity.
          return {
            ...item,
            quantity: newQuantity,
            item_price: item.product.price * newQuantity
          };
        }
        return item; // Return unchanged item for non-matching IDs
      })
    );

    const totalItems = cartItems.reduce(
      (acc, item) => 
        item.id === id ? numberOfItems + (newQuantity - item.quantity) : acc, numberOfItems
    );
    setNumberOfItems(totalItems);
  };

  // Remove an item from cart
  const handleRemove = (id, item_quantity) => {
    api.get(`cart/remove_cart_item?cart_code=${cart_code}&product_id=${id}`)
      .then((res) => {
        console.log(res.data);
        setNumberOfItems(curr => (curr ? curr - Number(item_quantity) : 0));
        setCartItems(cartItems.filter(item => item.product.id !== id));
        localStorage.removeItem(`cart_product_${id}`);
      })
      .catch(err => console.log(err.message))
  }
  if (!numberOfItems) {
    return (
      <section className="section-content padding-y bg">
        <div className="container" style={{ paddingTop: "50px" }}>
          <div class="alert alert-primary" role="alert">
            No items in cart yet.
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <section className="section-content padding-y bg">
        <div className="container" style={{ paddingTop: "50px" }}>
          <div className="row">
            <aside className="col-lg-9">
              <div className="card">
                <CartList items={cartItems} updateQuantityChange={updateQuantityChange} handleRemove={handleRemove} />
              </div>
            </aside>
            <aside className="col-lg-3">
              <CartSummary totalPrice={roundedTotal} taxTotal={taxIncludedTotal} tax={taxRounded} />
            </aside>
          </div>
        </div>
      </section>
    );
  }
};

export default CartPage;
