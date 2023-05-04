
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'



async function seasonEpisodes({ params }) {

  const id = params.id
  console.log(id)
  const url = `https://netflix54.p.rapidapi.com/season/episodes/?ids=${id}%2C80117715&offset=0&limit=25&lang=en`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '86d7942298msh0c7c33c1b425255p127340jsn8d44c5527f88',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };



  const response = await fetch(url, options);
  const result = await response.json();
  const NetFlixEpisodes = result[0].episodes
  // console.log(NetFlixEpisodes);





  return (
    <div className='text-white'>
   
      <h1 className='text-5xl text-white text-center'>  episodes </h1>
      <Link href={`/movies/${id}`}>Back to Series</Link>


      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">


            {
              NetFlixEpisodes.map((e) => <>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:border-red-500 hover:border-2 rounded-3xl my-2">
                  <div className="block relative h-48 rounded overflow-hidden">
                    <Image src={e.interestingMoment._342x192.webp.value.url} alt={e.title} width={260} height={200} />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-red-500 text-xs tracking-widest title-font mb-1"> {e.type} </h3>
                    <h2 className="text-yellow-600 title-font text-lg font-medium">{e.title} </h2>
                    <p className="mt-1 text-white"> {e.contextualSynopsis.text} </p>
                    <button className="rounded text-yellow-400 hover:text-white hover:bg-red-600 border-2 p-2 my-2 border-red-400 ">
                      <Link href={`/movies/watch`} >watch now</Link>
                    </button>
                  </div>
                </div>

              </>)

            }

          </div>
        </div>
      </section>


 
    </div>
  )
}

export default seasonEpisodes
