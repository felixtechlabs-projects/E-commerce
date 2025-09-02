import React, { useEffect, useState } from 'react'
import { addProductInCart, getProducts } from '../services/firebase.service';
import { auth } from '../environment';

const Products = () => {
  const [productArray, setProductArray] = useState([]);

  const fetchAllProducts = async () => {
    const products = await getProducts();
    setProductArray(products);
  }

  const addToCartProduct = async (productId, price) => {
    try {
      const message = await addProductInCart(productId, auth.currentUser.uid, 1, price, price);
      alert(message);
    } catch(error) {
      console.log(error);
    }
  }

  // Mounting phase -> side effect
  useEffect(() => {
    fetchAllProducts();
  }, []);
  return (
    <div className='flex flex-col mt-4 h-screen '>
      <h3 className='text-3xl font-bold text-blue-500 m-3'> Products </h3>

      <div className='flex'>
        {
          productArray.length > 0 && productArray.map(product => (
            <div className='w-1/3 m-3 p-2 border border-gray-200 shadow' key={product.id}>
              <p className='font-xl font-bold'> {product.name} </p>
              <p className='font-xl'> Brand: { product.brandname } </p>
              <p className='font-xl text-gray-400'> Price: ₹{ product.price} </p>
              <p className='text-gray-700'> {product.description} </p>
              <button className='border p-2 m-3 bg-green-600 text-white rounded-lg'
              onClick={() => addToCartProduct(product.id, product.price)}
              > 
                Add to cart 
              </button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Products