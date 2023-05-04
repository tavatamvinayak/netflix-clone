'use client';


import Link from 'next/link';
import React, { useState } from 'react'

function Signup() {

    /// //// SignUp
    const [inputSignupForm, setinputSignupForm] = useState({});

    const inputSignup = (e) => {
        setinputSignupForm({ ...inputSignupForm, [e.target.name]: e.target.value })
    }
    const Signupsubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/signup', {
            method: 'POST',
            body: JSON.stringify(inputSignupForm), // // sended data signup details
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
        // console.log(inputSignupForm)
    }



    return (
        <div>
        
            <div className='px-16 sm:px-60'>

                {/*  signUp */}
                
                <div className='sigUp  text-red-500 '>
                    <h1 className='text-2xl text-white text-center hover:text-red-600 hover:font-bold'><button >SignUp</button></h1>
                    <form  method='POST' onSubmit={Signupsubmit} action='/movies' className='my-5 flex flex-col' >
                        <input type="text" onChange={inputSignup} name="Fname" placeholder='Full Name' className='border border-2 border-red-500 rounded-lg  p-2 w-[100%]' /> <br /><br />
                        <input type="email" onChange={inputSignup} name="Email" placeholder='Email' className='border border-2 border-red-500 rounded-lg  p-2 w-[100%]' /> <br /> <br />
                        <input type="password" onChange={inputSignup} name="Password" placeholder='Password' className='border border-2 border-red-500 rounded-lg  p-2 w-[100%]' /> <br />
                        <input type="submit" value="SignUp" className='hover:bg-yellow-300 text-2xl p-2 rounded-md my-2 border border-2 border-yellow-300 ' />
                    </form>
                </div>
                <Link href={`/login`}> <p className='text-white text-xl'>Already have Account <span className='text-red-600 text-2xl'>Login</span>  </p></Link>

            </div>
         

        </div>
    )
}




export default Signup
