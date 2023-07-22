import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ProtectedLayout } from './components/shared'
import Home from './views/home'
import Login from './views/login'

function App() {

  return (
    <Routes>
      {/* Protected route */}
      <Route path='/' element={<ProtectedLayout/>}>
        <Route index element={<Home/>}/>
      </Route>
      {/* Login Page */}
      <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default App
