import "./App.css"
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Recipe from "./components/Recipes/recipe";
import Navbar from "./components/Navbar/navbar";
import Login from "./components/Login/login.jsx";
import SignUp from "./components/SignUp/signup.jsx";
import { Homepage } from "./pages/Homepage/Homepage";
// import Searchbar from "./components/Search/Search";


const Layout = () => (
  <>
   <Navbar />
   {/* <Searchbar /> */}
  <Outlet />
  </>
)



function App() {

  const user = true

  return(
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
      
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/home" element={<Homepage/>}></Route>
          <Route path="/home/recipe" element={user ? <Recipe/> : <Navigate to="/login" />}></Route>
        </Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
    </div>
    
  

    )

}

export default App;




//  