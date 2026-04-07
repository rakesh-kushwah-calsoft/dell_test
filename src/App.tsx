import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { AddUser } from './pages/AddUser'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/add-user' element= {<AddUser />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
