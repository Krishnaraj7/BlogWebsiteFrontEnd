
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header';
import SinglePage from './Pages/SinglePage';
import BlogPage from './Pages/BlogPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  

  return (
    <>
   
<Header />
<Routes>

  <Route path='/' element={<Home />} />
  <Route path='/blogpage' element={<BlogPage />} />
  <Route path='/singlepost' element={<SinglePage />} />
  <Route path='/profile' element={<Dashboard />} />
  <Route path='/login' element={<Login />} />
  <Route path='/register' element={<Register />} />
  <Route path='/*' element={<Navigate to={'/'} />}/>
</Routes>
  
    </>
  )
}

export default App
