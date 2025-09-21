import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import MovieDetails from "./pages/MovieDetails"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Booking from "./pages/Booking"
import Hall from "./pages/Hall"

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
        <Route path="/booking/:id" element={<Booking/>}/>
        <Route path="/hall/:movieId/:theaterId/:showId" element={<Hall/>}/>
      </Routes>
      </div>
    </Router>
  )
}

export default App