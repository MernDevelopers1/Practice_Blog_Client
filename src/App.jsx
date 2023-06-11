import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ArticleListPage from './Pages/ArticleListPage'
import ArticlePage from './Pages/ArticlePage'
import NavBar from './NavBar'
import NotFoundPage from './Pages/NotFoundPage'
import { initializeApp } from "firebase/app";
import Login from './Pages/Login'
import CreateAccount from './Pages/CreateAccount'

const firebaseConfig = {
  apiKey: "AIzaSyDysveTLrkYtBiuwTuJbNcJeR-rHqR_TcE",
  authDomain: "mypracticeblog-78928.firebaseapp.com",
  projectId: "mypracticeblog-78928",
  storageBucket: "mypracticeblog-78928.appspot.com",
  messagingSenderId: "91419305071",
  appId: "1:91419305071:web:a7d4891766e71c7af4d99a"
};

 initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);

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
            <Route path='/login' element={<Login/>} />
            <Route path='/CreateAccount' element={<CreateAccount/>} />
            <Route path='*' element={<NotFoundPage/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
