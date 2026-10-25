import axios from 'axios'
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const  Pixbay_key=import.meta.env.VITE_Pixbay;
const GIF_KEY= import.meta.env.VITE_GIPHY_KEY;

export async function fetchPhotos(query,page=1,per_page=20){
   const response= await axios.get('https://api.unsplash.com/search/photos',{
    params:{query,page,per_page},
    headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
   });
 return response.data.results
}   
export async function fetchVideos(query, page = 1, per_page = 15) {
  const response = await axios.get(
    'https://pixabay.com/api/videos/',
    {
      params: {
        key: Pixbay_key,
        q: query,
        page,
        per_page,
      },
    }
  );

  return response.data.hits;
}
export async function fetchGIF(query,limit=15)
{
    const response = await axios.get('https://api.giphy.com/v1/gifs/search',{

      params: {
        api_key: GIF_KEY,
        q: query,
        limit: limit,
        rating: 'g',
      }}
        )
        return response.data.data
}
