import React from "react";
import { useDispatch } from "react-redux";
import { addCollection, addedToast } from "../redux/feature/collectionSlice";
const ResultCard = ({ item }) => {
  const  dispatch =useDispatch();

  const addtoCollection=(item)=>{
   dispatch(addCollection(item),
   dispatch(addedToast())

   )
  }
  return (
    <div className="w-56 h-56 p-2 m-2">
      <div className="relative w-full h-full overflow-hidden rounded-lg bg-gray-800">

        {/* Show photo */}
        {item.type === "photo" && (
          <img
            className="w-full h-full object-cover"
            src={item.src}
            alt={item.title || "Photo"}
            loading="lazy"
          />
        )}

        {/* Show video */}
        {item.type === "videos" && (
          <video
            className="w-full h-full object-cover"
            src={item.src}
            poster={item.thumbnail}
            controls
          />
        )}

        {/* Show GIF */}
        {item.type === "gif" && (
          <img
            className="w-full h-full object-cover"
            src={item.src}
            alt={item.title || "GIF"}
            loading="lazy"
          />
        )}

        {/* Bottom overlay */}
        <div className="absolute bottom-0 left-0 w-full flex items-end justify-between gap-2 p-2 bg-gradient-to-t from-black/80 to-transparent">

          <h2 className="min-w-0 flex-1 text-xs font-bold text-white line-clamp-2">
            {item.title || "Untitled"}
          </h2>

          <button
            type="button"
            className="shrink-0 rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600 transition active:scale-96"
            onClick={() => {
              addtoCollection(item)

            }}
          >
            Save
          </button>

        </div>
      </div>
    </div>
  );
};

export default ResultCard; 