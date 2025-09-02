import React, { useState } from 'react'
import { createContactedUser } from '../services/firebase.service';

const Contact = () => {
  const [formData, setFormData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    createContactedUser(formData.name, formData.email, formData.contact, formData.message);
    alert("new contacted user added in database");
    setFormData({
      name: "",
      contact: "",
      email: "",
      message: ""
    });
  }
  return (
    <div className='flex flex-col items-center mt-4 h-screen '>
      <h3 className='text-3xl font-bold text-blue-500'> Contact Us </h3>

      <form className='w-1/2 border-gray-200 shadow p-3 flex flex-col items-center' onSubmit={handleSubmit}>
        <label htmlFor=""> Enter Full name: </label>
        <input type="text" className='border rounded-lg p-2 w-1/2' placeholder='john doe'
          value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <br /> <br />

        <label htmlFor=""> Enter Contact Number: </label>
        <input type="tel" className='border rounded-lg p-2 w-1/2' placeholder='9890989098' maxLength={10} minLength={10}
          value={formData.contact} onChange={(e) => setFormData({ ...formData, contact: e.target.value })} />
        <br /> <br />

        <label htmlFor=""> Enter Email: </label>
        <input type="email" className='border rounded-lg p-2 w-1/2 mb-4' placeholder='john@gmail.com'
          value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        /> <br />

        <label htmlFor="">Enter Message: </label>
        <textarea type="password" className='border rounded-lg p-2 w-1/2 mb-4' placeholder='Write here...'
          value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        > </textarea> <br />
        <button type='submit' className='border rounded-lg p-2 m-3 bg-green-600 text-white hover:bg-green-700 d-block m-auto'> Submit </button>
      </form>
    </div>
  )
}

export default Contact