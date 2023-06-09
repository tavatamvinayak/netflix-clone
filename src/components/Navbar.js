"use client"
import Link from 'next/link'
import React from 'react'


import  { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

function Navbar() {
    const [progress, setProgress] = useState(0)
    return (
        <div>
            <LoadingBar
                color='#ff0000'
                progress={progress}
                onLoaderFinished={() => setProgress(2)}
                height={5}
                transitionTime={300}
                loaderSpeed={500}
            />

            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href={`/`} onClick={() => setProgress(progress + 100)} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" >
                        <span className="ml-3 text-5xl text-red-600">NetFlix </span>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href={`/`} onClick={() => setProgress(progress + 100)} className="mr-5 hover:text-red-600 font-bold  text-white  "  >Home</Link>
                        {/* <Link href={`/series`} className="mr-5 hover:text-red-600 font-bold ">Series</Link> */}
                        <Link href={`/movies`} onClick={() => setProgress(progress + 100)} className="mr-5 hover:text-red-600 font-bold hover:after:content-['Series'] text-white"  >Movies </Link>

                    </nav>
                    <Link href={`/login`} onClick={() => setProgress(progress + 100)} >
                        <button className="inline-flex items-center bg-red-100 text-gray-950 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded font-bold hover:text-white text-base mt-4 md:mt-0">
                            Login
                        </button></Link>
                </div>
            </header>
        </div>
    )
}

export default Navbar




















