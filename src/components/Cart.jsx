import React, { useEffect, useState } from 'react'
import { deleteCartProduct, getCartProductsForUserId, increaseOrDecreaseCountForCartId } from '../services/firebase.service'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [productArray, setProductArray] = useState([]);
  const navigate = useNavigate();

  const fetchCartProducts = async () => {
    const products = await getCartProductsForUserId();
    console.log("Products ", products);
    setProductArray(products);
  }

  useEffect(() => {
    fetchCartProducts();
  }, [])

  const increment = (cartId, quantity, finalPrice, productQuantity) => {
    if (quantity != 0 && quantity <= productQuantity) {
      increaseOrDecreaseCountForCartId(cartId, quantity, finalPrice);
      fetchCartProducts();
    }
  }

  const deleteCartId = async(id) => {
    await deleteCartProduct(id);
    fetchCartProducts();
  }


  const checkOut = () => {
    navigate("/checkout");
  }
  

  return (
    <div className='flex flex-col mt-4 h-screen '>
      <h3 className='text-3xl font-bold text-blue-500 m-3'> Cart </h3>

      <div className='flex'>
        {
          productArray && productArray.map((product, index) => (
            <div className='w-1/3 m-3 p-2 border border-gray-200 shadow' key={index}>
              <div className='flex justify-between w-full'>
                <p className='font-xl font-bold'> {product.name} </p>
                <button className='border bg-red-600 text-white p-2 rounded-lg'
                onClick={() => deleteCartId(product.id)}
                > Delete </button>
              </div>
              <p className='font-xl text-gray-400'> Price: ₹{product.finalPrice} </p>
              <button className='border border-gray-300 p-1 m-1'
                onClick={() => increment(product.id, product.quantity - 1, product.basePrice * (product.quantity - 1), product.productQuantity)}
              > - </button>
              {product.quantity}
              <button className='border border-gray-300 p-1 m-1' onClick={() => increment(product.id, product.quantity + 1, product.basePrice * (product.quantity + 1), product.productQuantity)}> + </button>
            </div>
          ))
        }
      </div>
      <br />
      <button className='border p-2 m-3 bg-green-600 text-white w-1/4'
      onClick={checkOut}
      > Checkout </button>
    </div>
  )
}

export default Cart