import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../environment';

const Login = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const user = await signInWithEmailAndPassword(auth, formData.username, formData.password);
      console.log(user);
      localStorage.setItem("uid", user.user.uid);
      navigate("/");
    } catch (error) {
      alert(error);
    }
   
  }

  return (
    <div className='flex flex-col items-center mt-4 h-screen '>
      <h3 className='text-3xl font-bold text-blue-500'> Log In </h3>

      <form className='w-1/2 border-gray-200 shadow p-3 flex flex-col items-center' onSubmit={handleSubmit}>
        <label htmlFor=""> Enter Username: </label>
        <input type="text" className='border rounded-lg p-2 w-1/2' placeholder='john@gmail.com' 
        value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})} />
        <br /> <br />

        <label htmlFor=""> Enter Password: </label>
        <input type="password" className='border rounded-lg p-2 w-1/2 mb-4' placeholder='john@123' 
        value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}
        /> <br />
        <button type='submit' className='border rounded-lg p-2 m-3 bg-green-600 text-white hover:bg-green-700 d-block m-auto'> Submit </button>
      </form>
    </div>
  )
}

export default Login

/**
 * Props vs state
 * 1) props -> parent component
 * state -> local component
 * 2) props => immutable (not change the value)
 * state => mutable
 * 3) state => Re rending on change
 *  props => no re rendering
 */