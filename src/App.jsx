import { Route, Routes } from "react-router-dom"
//components
import Layout from "./layout/Layout"
//pages
import HomePage from "./Pages/HomePage"
import BlogPage from "./Pages/BlogPage"
import AuthorPage from "./Pages/AuthorPage"

function App() {

  return (
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/blogs/:slug" element={<BlogPage/>}/>
          <Route path="/authors/:slug" element={<AuthorPage/>}/>
        </Routes>
        <HomePage/>
      </Layout>
  )
}

export default App
