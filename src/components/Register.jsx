import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../environment';
import { createUser } from '../services/firebase.service';

const Register = () => {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        if(formData.password !== formData.confirmPassword) {
            alert("Passwords are not matching");
            return;
        }
        try {
            const user = await createUserWithEmailAndPassword(auth, formData.username, formData.password);
            console.log(user);
            createUser(formData.name, formData.username, user.user.uid);
            navigate("/login");
        } catch(error) {
            alert(error);
        }
        
       
    }
    return (
        <div className='flex flex-col items-center mt-4 h-screen '>
            <h3 className='text-3xl font-bold text-blue-500'> Register Here </h3>

            <form className='w-1/2 border-gray-200 shadow p-3 flex flex-col items-center' onSubmit={handleSubmit}>
                <label htmlFor=""> Enter Full name: </label>
                <input type="text" className='border rounded-lg p-2 w-1/2' placeholder='john doe'
                    value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                <br /> <br />

                <label htmlFor=""> Enter Username: </label>
                <input type="text" className='border rounded-lg p-2 w-1/2' placeholder='john@gmail.com'
                    value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
                <br /> <br />

                <label htmlFor=""> Enter Password: </label>
                <input type="password" className='border rounded-lg p-2 w-1/2 mb-4' placeholder='john@123'
                    value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                /> <br />

                <label htmlFor=""> Confirm Password: </label>
                <input type="password" className='border rounded-lg p-2 w-1/2 mb-4' placeholder='john@123'
                    value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                /> <br />
                <button type='submit' className='border rounded-lg p-2 m-3 bg-green-600 text-white hover:bg-green-700 d-block m-auto'> Submit </button>
            </form>
        </div>
    )
}

export default Register