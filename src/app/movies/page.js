import Footer from '@/components/Footer';
import MovieCard from '@/components/MovieCard';
import Navbar from '@/components/Navbar';
import React from 'react'

async function Movies() {



  const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': '86d7942298msh0c7c33c1b425255p127340jsn8d44c5527f88',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  console.log(main_data.jawSummary)




  return (
    <>
    <Navbar/>
      <div>
       <h1 className='text-center'>Movies & Series </h1>
       <p className='text-center'>Streamming Watch now </p>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">

              {
                main_data.map((curElem) => {
                  return <MovieCard key={curElem.id} {...curElem} />
                })
              }
              
            </div>
          </div>
        </section>


      </div>
      <Footer/>
    </>
  )
}

export default Movies
