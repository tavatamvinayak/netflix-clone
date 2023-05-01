import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

function Login() {
    return (
        <div>
            <Navbar />
            <div className='sm:px-36'>
                <div className="login  text-red-500 ">
                    <h1 className='text-2xl text-white'><button >Login</button></h1>

                        <form >
                            <input type="email" name="Email" placeholder='Email' className='border border-2 border-red-500 rounded-lg  p-2 w-[100%]' /> <br /> <br />
                            <input type="password" name="Password" placeholder='Password' className='border border-2 border-red-500 rounded-lg  p-2 w-[100%]'  /> <br />
                            <input type="submit" value="Login" className='hover:bg-yellow-300 p-2 rounded-md my-2' />
                        </form>
                </div>
                <div className='sigUp  text-red-500 '>
                    <h1 className='text-2xl text-white'><button >SigUp</button></h1>
                    <form >
                        <input type="text" name="Fname" placeholder='Full Name'  className='border border-2 border-red-500 rounded-lg  p-2 w-[100%]' /> <br /><br />
                            <input type="email" name="Email" placeholder='Email' className='border border-2 border-red-500 rounded-lg  p-2 w-[100%]' /> <br /> <br />
                            <input type="password" name="Password" placeholder='Password' className='border border-2 border-red-500 rounded-lg  p-2 w-[100%]'  /> <br />
                            <input type="submit" value="Login" className='hover:bg-yellow-300 p-2 rounded-md my-2' />
                        </form>
                </div>

            </div>
            <Footer />

        </div>
    )
}

export default Login
