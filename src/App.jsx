import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import MovieDetails from "./pages/MovieDetails"
import Register from "./pages/Register"
import Login from "./pages/Login"

const App = () => {
  return (
    <Router>
      <Navbar/>
      <div className="container mx-auto px-10 mt-10">

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/:id" element={<MovieDetails/>}/>
      </Routes>
      </div>
    </Router>
  )
}

export default App