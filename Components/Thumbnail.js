import Image from "next/image";

import { ThumUpIcon } from "@heroicons/react/outline";

function Thumbnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="group cursor-pointer p-2 transition-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        alt=""
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        height={1080}
        width={1928}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        {/* <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} .`}{" "}
          {result.release_data || result.first_air_date}{" "}
          <ThumUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p> */}
      </div>
    </div>
  );
}

export default Thumbnail;
