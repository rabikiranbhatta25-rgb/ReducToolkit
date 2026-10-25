import { Link } from "react-router-dom"
import ResultGrid from "../components/ResultGrid"
import Searchbar from "../components/Searchbar"
import Tabs from "../components/Tabs"
import NavBar from "../components/NavBar"

const HomePage = () => {
  return (
    <div>
        <NavBar/>
      <Searchbar/>
      <Tabs/>
      <ResultGrid/>
    </div>
  )
}

export default HomePage
