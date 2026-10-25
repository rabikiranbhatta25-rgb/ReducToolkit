import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGIF } from "../api/mediaApi";
import { setLoading, setError, setResults } from "../redux/feature/searchSlice";
import { useEffect } from "react";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();

  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(
    function () {
      const getData = async () => {
        if (!query.trim()) return;
try {
    dispatch(setLoading(true));
    dispatch(setError(null));

    

    let data;

    if (activeTab === "photos") {
        let response = await fetchPhotos(query);

        data = response.map((item) => ({
            id: item.id,
            type: item.asset_type,
            title: item.alt_description || "",
            thumbnail: item.urls.small,
            src: item.urls.full,
        }));
    } else if (activeTab === "GIF") {
        let response = await fetchGIF(query);

        data = response.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title || "",
            thumbnail: item.images?.fixed_width_small?.url || "",
            src: item.images?.original?.url || "",
        }));
    } else if (activeTab === "videos") {
        let response = await fetchVideos(query);
    

        data = response.map((item) => ({
            id: item.id,
            type: "videos",
            title: item.user,
            thumbnail: item.videos?.small?.thumbnail || "",
            src: item.videos?.small?.url || "",
        }));
    } else {
        console.log("Unknown activeTab:", activeTab);
        return;
    }

    dispatch(setResults(data));

} catch (err) {
    console.log("API Error:", err);
    dispatch(setError(err.message));
} finally {
    dispatch(setLoading(false));
}
      };

      getData();
    },
    [query, activeTab, dispatch],
  );
  return (
    <div className="flex flex-wrap flex-row overflow-auto justify-between  "> 
            {loading && <p className="w-full text-center text-xl p-5">Loading...</p>}

        {error && <p className="w-full text-center text-red-500">{error}</p>}
       { !loading&&!error&&results.map((item,idx)=>(
                <div key={idx} >
                    <ResultCard item={item}/>
                   </div>
       ))
        }      
    </div>
  );
};

export default ResultGrid;
