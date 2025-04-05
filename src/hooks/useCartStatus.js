import { useContext, useEffect, useState } from "react";
import uuidValue from "../GenerateCartCode";
import api from "../api";
import { CartContext } from "../context/CartContext";

const useCartStatus = (product) => {
  const cart_code = uuidValue();
  const product_id = product.id
  const data = {
    cart_code,
    product_id
  }
  const [productAdded, setProductAdded] = useState(false)
  const {setNumberOfItems} = useContext(CartContext)
  useEffect(function () {
    let saved = localStorage.getItem(`cart_product_${product_id}`);
    if (saved === 'true') {
      setProductAdded(true);
    }
  }, [product_id])

  const add_to_cart = function () {
    console.log(cart_code)
    api.post('/cart/add_to_cart/', data)
      .then(res => {
        console.log(res.data);
        setProductAdded(true)
        setNumberOfItems(curr => (curr ? curr : 0) + 1);
        localStorage.setItem(`cart_product_${product_id}`, 'true');
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  useEffect(function () {
    // productId = 
    api.get(`/cart/item_in_cart?cart_code=${cart_code}&productId=${product_id}`)
    // .then(res => setProductAdded(res.data))
      .catch(err => {
        console.log(err.message);
      })
  }, [cart_code, product_id])

  return { productAdded, add_to_cart };
}

export default useCartStatus;