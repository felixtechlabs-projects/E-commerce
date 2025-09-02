import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../environment'
import { signOut } from 'firebase/auth'

const Header = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        if (auth.currentUser != null) {
            try {
                await signOut(auth);
                console.log("Logged out");
                localStorage.removeItem("uid");
                navigate("/");
            } catch (error) {
                console.log(error);
            }
        } else {
            localStorage.removeItem("uid");
            navigate("/");
        }
    }

    return (
        <>
            <div className='flex justify-between p-4 bg-gray-100 shadow'>
                <Link to={"/"}> My Shop </Link>
                <ul className='flex justify-around w-1/2'>
                    <li>
                        <Link to={"/about"} className='border rounded-lg p-2 hover:bg-gray-400 hover:text-white'> About </Link>
                    </li>
                    <li>
                        <Link to={"/blogs"} className='border rounded-lg p-2 hover:bg-gray-400 hover:text-white'> Blogs </Link>
                    </li>
                    <li>
                        <Link to={"/contact"} className='border rounded-lg p-2 hover:bg-gray-400 hover:text-white'> Contact </Link>
                    </li>
                    <li>
                        <Link to={"/products"} className='border rounded-lg p-2 hover:bg-gray-400 hover:text-white'> Products </Link>
                    </li>
                    <li>
                        <Link to={"/cart"} className='border rounded-lg p-2 hover:bg-gray-400 hover:text-white'> Cart </Link>
                    </li>
                    {
                        (localStorage.getItem("uid") == undefined) && (
                            <> <li>
                                <Link to={"/login"} className='border rounded-lg p-2 hover:bg-gray-400 hover:text-white'> Login </Link>
                            </li>
                                <li>
                                    <Link to={"/register"} className='border rounded-lg p-2 hover:bg-gray-400 hover:text-white'> Register </Link>
                                </li> </>
                        )
                    }
                    {
                        (localStorage.getItem("uid") != undefined) && (
                            <li>
                                <Link onClick={handleLogout} className='border rounded-lg p-2 hover:bg-gray-400 hover:text-white'> Logout </Link>
                            </li>
                        )
                    }

                </ul>
            </div>
        </>
    )
}

export default Header
