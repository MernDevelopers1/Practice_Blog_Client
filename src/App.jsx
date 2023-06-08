import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ArticleListPage from './Pages/ArticleListPage'
import ArticlePage from './Pages/ArticlePage'
import NavBar from './NavBar'
import NotFoundPage from './Pages/NotFoundPage'

function App() {

  return (
    <>
    <BrowserRouter>

      <div className='App'>
        <NavBar/>
        <div id="page-body">
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/About' element={<AboutPage/>} />
            <Route path='/Articles' element={<ArticleListPage/>} />
            <Route path='/Articles/:id' element={<ArticlePage/>} />
            <Route path='*' element={<NotFoundPage/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
