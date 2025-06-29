import { BrowserRouter, Route, Routes } from "react-router"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Home from "./Pages/Home/Home"
import Blog from "./Pages/Blog/Blog"
import BlogDetails from "./Pages/BlogDetails/BlogDetails"


function App() {


  return (
    <>
      <BrowserRouter>
        {/* Global Navbar  */}
        <Navbar />


        {/* Pages  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/details/:id" element={<BlogDetails />} />
        </Routes>
        

        {/* Global Footer  */}
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
