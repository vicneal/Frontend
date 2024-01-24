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
          <Route path='/' element={<LoginForm/> }/>
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

// public function login(Request $request)
//     {
//         try {
//             $credentials = $request->only('email', 'password');
//             $user = Usuario::where('email', $credentials['email'])->first();
//             $user->makeVisible('contrasena');
//             // $credentials['password'] = bcrypt($request->password);
//             //$token = auth()->attempt($credentials);
//             //$token = JWTAuth::fromUser($user);

//             // if (!$token = JWTAuth::attempt($credentials)) {
//             //     return response()->json(['error' => 'Unauthorized'], 401);
//             // }
//             if (Hash::check($request->password, $user->contrasena)) {
//                 // Autenticación exitosa
//                 //return response()->json(['message' => JWTAuth::fromUser($user)]);
//                 $token = JWTAuth::fromUser($user);
//                 return response()->json([
//                     'message' => 'Usuario registrado exitosamente!',
//                     //'user' => $usuario,
//                     'access_token' => $token
//                 ], 201);
//             } else {
//                 // Credenciales incorrectas
//                 return response()->json(['error' => 'Unauthorized'], 401);
//             }
//             // return $this->respondWithToken($token);

//         } catch (\Exception $e) {
//             return response()->json(['error' => $e->getMessage()], 500);
//         }
//     }