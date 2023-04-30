import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href={`/`} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-5xl text-red-600">NetFlix</span>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href={`/`} className="mr-5 hover:text-red-600 font-bold  text-white  ">Home</Link>
                        {/* <Link href={`/series`} className="mr-5 hover:text-red-600 font-bold ">Series</Link> */}
                        <Link href={`/movies`} className="mr-5 hover:text-red-600 font-bold text-white">Movies</Link>
                        
                    </nav>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded font-bold hover:text-white text-base mt-4 md:mt-0">
                        Login
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Navbar




















