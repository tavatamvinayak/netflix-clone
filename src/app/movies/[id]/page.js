import React from 'react'


import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
async function netflixID({ params }) {

  const id = params.id


  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
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
  const main_data = data[0].details;
  // console.log(main_data)





  /// /////////////// //////////// Episodes
  const episodes = {
    method: 'GET',
    url: 'https://netflix54.p.rapidapi.com/season/episodes/',
    params: {
      ids: '80077209,80117715',
      offset: '0',
      limit: '25',
      lang: 'en'
    },
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': '86d7942298msh0c7c33c1b425255p127340jsn8d44c5527f88',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };




  return (
    <>
      <Navbar />
      <div>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <Image src={main_data.backgroundImage.url} alt={main_data.title} width={260} height={200} className="object-cover object-center w-full h-full block" />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h3 className=" text-xs tracking-widest title-font text-red-600 mb-1"> {main_data.type} </h3>
              <h2 className=" title-font text-5xl font-serif text-white  font-medium hover:text-red-600">{main_data.title} </h2>
              <p className="mt-1 text-white"> {`${main_data.synopsis} ...`} </p>
              <h3 className='text-orange-500'> {main_data.numSeasonsLabel} </h3>

              <div>
                <p className='text-lg text-blue-500' > type :  {main_data.type} </p>
                <summary className='text-yellow-500'><h3 className='text-yellow-500'>Cast</h3> </summary>
                <p className='text-orange-500'> {
                  main_data.cast.map((e) => <> {` ${e.name} , `}</>)
                }</p>
              </div>
              <div>
                <summary className='text-yellow-500'>genres</summary>
                <p className='text-orange-500'>
                  {
                    main_data.genres.map((e) => <> {` ${e.name} , `}   </>)
                  }
                </p>
              </div>

              <Link href={`/movies/watch`}>
                <button className='p-2 border-2 text-white border-red-400 my-3 hover:bg-red-500 rounded-2xl hover:text-white'>
                  Watch now
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className='Episodes pb-28'>
          <Link href={`/movies/episodes/${id}`}>
            <div className='flex flex-col items-center'>
              <p>Click here</p>
              <button className='text-orange-500 text-center text-2xl'>  SEONSON EPISODES ALL </button>
            </div>
          </Link>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default netflixID;
