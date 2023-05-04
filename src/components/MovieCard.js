import Image from "next/image";
import Link from "next/link";

  // /// top loading bar






const MovieCard = (curElem) => {

    const { id, type, title, synopsis } = curElem.jawSummary;

    // /// top loading bar
  

    return (
        <>
 

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:border-white hover:border-2 rounded-3xl hover:bg-red-400 my-2">
                <div className="block relative h-48 rounded overflow-hidden">
                <Link href={`/movies/${id}`} ><Image src={curElem.jawSummary.backgroundImage.url} alt={title} width={260} height={200} className="object-cover object-center w-full h-full block" /></Link>
                </div>
                <div className="mt-4">
                    <h3 className="text-white text-xs tracking-widest title-font mb-1"> {type} </h3>
                    <h1 className="text-white  title-font text-2xl font-medium">{title.substring(0, 30)} </h1>
                    <p className="mt-1 text-white "> {`${synopsis.substring(0, 70)} ...`} </p>
                    <button className="rounded hover:text-white hover:bg-red-600 border-2 p-2 my-2 text-white  border-orange-400 "><Link href={`/movies/${id}`} >watch now</Link></button>
                </div>
            </div>

        </>
    );
};

export default MovieCard;