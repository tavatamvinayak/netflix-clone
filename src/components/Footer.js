import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="text-gray-600 body-font">
                    <div className='flex flex-col items-center'>
                             <Link href={`/`} ><h1 className='text-red-600 text-2xl'> Netflix </h1></Link>  
                             <p className='text-white'>Watch any series & movies Streamming </p>
                    </div>                    
            </footer>
        </div>
    )
}

export default Footer
