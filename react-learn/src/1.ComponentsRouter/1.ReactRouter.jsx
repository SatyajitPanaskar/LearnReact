import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './1.Home'
import About from "./2.About";
import Navbar from "./1.Navbar";
import UserList from "./1.UserList";
import UserProfile from "./UserProfile";


function ReactRouter() {
  return (
      <>
         
      {/* Navigations */}
          <BrowserRouter>
              <Navbar/>
        <Routes>
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<About />} />
                  <Route path="/user" element={<UserList />} />
                  <Route path="/user/:userId" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
       <h1>This is main page React Router</h1>
          
      </>
  )
}

export default ReactRouter