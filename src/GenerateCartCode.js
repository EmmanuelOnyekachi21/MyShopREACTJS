import { v4 as uuid4 } from 'uuid'

const uuidValue = function (){
  let cart_code = localStorage.getItem('cart_code');
  if (!cart_code) {
    const randomValue = uuid4();
    localStorage.setItem('cart_code', randomValue);
    return randomValue;
  }
  return cart_code;
}

export default uuidValue;