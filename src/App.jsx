import { useState } from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import './App.css'
import Modal from 'react-modal';
import LoginForm from './components/LoginForm.jsx'
import RegisterForm from './components/RegisterForm.jsx'
import PersonalInfo from './components/PersonalInfo.jsx'
import ChangelInfo from './components/ChangeInfo.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx'
import Roles from './components/dashboard/Roles.jsx'
import Usuarios from './components/dashboard/Usuarios.jsx'
import Bitacora from './components/dashboard/Bitacora.jsx'
import Pagina from './components/dashboard/Pagina.jsx'
import PaginaNoEncontrada from './components/PaginaNoEncontrada.jsx';

const appElement = document.getElementById('root');
Modal.setAppElement(appElement);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginForm/> }/>
          <Route path='/register' element={<RegisterForm/> }/>
          <Route path='/personalInfo' element={<PersonalInfo/> }/>
          <Route path='/changeInfo' element={<ChangelInfo/> }/>
          <Route path='/dashboard' element={<Dashboard/> }/>
          <Route path='/roles' element={<Roles/> }/>
          <Route path='/usuarios' element={<Usuarios/> }/>
          <Route path='/bitacora' element={<Bitacora/> }/>
          <Route path='/pagina' element={<Pagina/> }/>
          <Route path='*' element={<PaginaNoEncontrada/> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
