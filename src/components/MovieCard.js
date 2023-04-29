import Image from "next/image";
import Link from "next/link";
const MovieCard = (curElem) => {

    const { id, type, title, synopsis } = curElem.jawSummary;

    return (
        <>


            <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:border-red-500 hover:border-2 rounded-3xl my-2">
                <div className="block relative h-48 rounded overflow-hidden">
                <Link href={`/movies/${id}`} ><Image src={curElem.jawSummary.backgroundImage.url} alt={title} width={260} height={200} className="object-cover object-center w-full h-full block" /></Link>
                </div>
                <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1"> {type} </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{title.substring(0, 30)} </h2>
                    <p className="mt-1"> {`${synopsis.substring(0, 70)} ...`} </p>
                    <button className="rounded hover:text-white hover:bg-red-600 border-2 p-2 my-2 border-red-400 "><Link href={`/movies/${id}`} >watch now</Link></button>
                </div>
            </div>

        </>
    );
};

export default MovieCard;