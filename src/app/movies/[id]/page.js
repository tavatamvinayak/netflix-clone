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
              <h3 className='text-orange-500'> { main_data.numSeasonsLabel} </h3>
              <h3 className='text-yellow-500'>Cast</h3>
              <details>
                <summary className='text-white'> {main_data.type} Cast</summary>
              {
                main_data.cast.map((e)=> <><li className='text-orange-500'> {e.name} </li></>)
              }
              </details>
              <details>
                <summary className='text-white'>genres</summary>
                {
                  main_data.genres.map((e)=> <><p>{e.name}  </p> </>)
                }
              </details>

              <button className='p-2 border-2 text-white border-red-400 my-3 hover:bg-red-500 rounded-2xl hover:text-white'> Watch now</button>

            </div>

          </div>
        </section>

        {/* <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">

              {
                // <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:border-red-500 hover:border-2 rounded-3xl my-2">
                //   <div className="block relative h-48 rounded overflow-hidden">
                //     <Link href={`/movies/${id}`} ><Image src={} alt={title} width={260} height={200} className="object-cover object-center w-full h-full block" /></Link>
                //   </div>
                //   <div className="mt-4">
                //     <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1"> {type} </h3>
                //     <h2 className="text-gray-900 title-font text-lg font-medium">{title.substring(0, 30)} </h2>
                //     <p className="mt-1"> {`${synopsis.substring(0, 70)} ...`} </p>
                //     <button className="rounded hover:text-white hover:bg-red-600 border-2 p-2 my-2 border-red-400 "><Link href={`/movies/${id}`} >watch now</Link></button>
                //   </div>
                // </div>
              }

            </div>
          </div>
        </section> */}

      </div>
      <Footer />
    </>
  )
}

export default netflixID;
