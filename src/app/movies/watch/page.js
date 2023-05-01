import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

function Watch() {
    return (
        <>

            <Navbar />
            <div className='flex justify-center'>
                <iframe width="920" height="545" src="https://www.youtube.com/embed/iuk77TjvfmE">
                </iframe>
            </div>
            <Footer />
        </>
    )
}

export default Watch
