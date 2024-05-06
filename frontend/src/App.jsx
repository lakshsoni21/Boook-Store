import React from 'react'

import {Routes, Route} from 'react-router-dom'

import Dashboard from "./pages/Dashboard"
import CreateBooks from "./pages/CreateBooks"
import DeleteBooks from "./pages/DeleteBooks"
import EditBooks from "./pages/EditBooks"
import ShowBook from "./pages/ShowBook"
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/users/dashboard' element={<Dashboard />} />
      <Route path='/users/books/create' element={<CreateBooks />} />
      <Route path='/users/books/details/:id' element={<ShowBook />} />
      <Route path='/users/books/edit/:id' element={<EditBooks />} />
      <Route path='/users/books/delete/:id' element={< DeleteBooks />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />

    </Routes>
  )
}

export default App;