'use client';


import Link from 'next/link';
import React, { useState } from 'react'

function Login() {

    /// /// Login 
    const [inputLoginForm, setinputLoginForm] = useState({});
    const inputLogins = (e) => {
        setinputLoginForm({ ...inputLoginForm, [e.target.name]: e.target.value });
    }
    const Loginsubmit = async (e) => {
        e.preventDefault();
        // /// fetch server 
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            body: JSON.stringify(inputLoginForm), // // sended data login details
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.text();
        console.log(data)
        // console.log(inputLoginForm)
    }

    return (
        <div>
            
            <div className='px-16 sm:px-60'>

                {/* login */}
                <div className="login  text-red-500 " >
                    <h1 className='text-2xl text-white text-center hover:text-red-600 hover:font-bold'>Login</h1>
                    <form method='post' onSubmit={Loginsubmit} action='http://localhost:3000/movies' className='my-5 flex flex-col' >
                        <input onChange={inputLogins} type="email" name="Email" placeholder='Email' className='border border-2 border-red-500 rounded-lg  p-2 w-[100%]' /> <br /> <br />
                        <input onChange={inputLogins} type="password" name="Password" placeholder='Password' className='border border-2 border-red-500 rounded-lg  p-2 w-[100%]' /> <br />
                        <input type="submit" value="Login" className='hover:bg-yellow-300 text-2xl p-2 rounded-md my-2 border border-2 border-yellow-300 ' />
                    </form>

                </div>
               <Link href={`/signup`}> <p className='text-white text-xl'>Create a Account <span className='text-red-600 text-2xl'>SignUp</span>  </p></Link>
                

            </div>

          

        </div>
    )
}




export default Login
