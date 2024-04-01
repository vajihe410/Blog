import { Navigate, Route, Routes } from "react-router-dom"
//components
import Layout from "./layout/Layout"
//pages
import HomePage from "./Pages/HomePage"
import BlogPage from "./Pages/BlogPage"
import AuthorPage from "./Pages/AuthorPage"
import ScrollToTop from "./components/ScrollToTop"

function App() {

  return (
      <Layout>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/blogs/:slug" element={<BlogPage/>}/>
          <Route path="/authors/:slug" element={<AuthorPage/>}/>
        </Routes>
      </Layout>
  )
}

export default App
