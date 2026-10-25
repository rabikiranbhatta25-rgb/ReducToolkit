import { Route, Router, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CollectionPage from "./pages/CollectionPage"
 import { ToastContainer } from 'react-toastify';
const App = () => {
 
  return (
    <div className='h-[1500px] text-white w-full bg-gray-950'>
     <Routes>
  <Route path='/' element={<HomePage></HomePage>}> </Route>
  <Route path='/collection' element={<CollectionPage/>}/>
     </Routes>
      <ToastContainer/>
    </div>
  )
}

export default App
