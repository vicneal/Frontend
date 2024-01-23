import React, { useEffect, useState } from 'react';
import devLogo from '../assets/devchallenges.svg'
import googleLogo from '../assets/Google.svg'
import fbLogo from '../assets/Facebook.svg'
import twLogo from '../assets/Twitter.svg'
import { useNavigate } from 'react-router-dom';
import githLogo from '../assets/Gihub.svg'


export const LoginForm = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: '',
        password: '',
      });
    const [valido, setValido] = useState(true);
    const [esvacio, setEsVacio] = useState(false);
    const [esvacio2, setEsVacio2] = useState(false);

    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
      };
    const handelBlurEmail = () => {
        const regex = /^[a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const invalido = regex.test(userData.email);

        if (userData.email.length == 0) {
            setEsVacio(true);
        } else {
            setValido(invalido);
            setEsVacio(false);
        }
    }
    const handelBlurPass = () => {

        if (userData.password.length == 0) {
            setEsVacio2(true);
        } else {
            setEsVacio2(false);
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault();
      
        try {
          const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          const data = await response.json();
      
          if (data && data.access_token) {
            sessionStorage.setItem('token', data.access_token);
            //sessionStorage.setItem('idUser', data.user.id);
            navigate('/personalInfo');
          } else {
            // console.error('Error al iniciar sesión:', data);
            alert('Error al iniciar sesión');
          }
        } catch (error) {
        //   console.error('Error al realizar la solicitud:', error.message);
          
          if (error.response) {
            // console.error('Respuesta del servidor:', error.response.data);
            // Puedes acceder a más detalles en error.response
          }
      
          alert('Error al conectar con el servidor');
        }
      };
      
    return (
        <div className='w-[100%] h-[100%]'>
            <form action="" method="post"  name="loginForm" className=' border-[1px] border-slate-500 border-solid rounded-[20px] p-10 my-14 w-[400px] mx-auto flex-col'>
                <div>
                    <img src={devLogo} className="w-[135px]" alt=" logo" />
                </div>
                <div>
                    <h2 className='font-bold my-4'>Login</h2>
                </div>
                <div className='mb-2'>
                    <span className={esvacio ? ' font-semibold text-xs text-red-600 block' : 'hidden'}>Este campo no puede estar vacío!</span>
                    <span className={valido ? ' hidden' : 'font-semibold text-xs text-red-600'}>Correo Eléctronico no Válido!</span>
                </div>
                <div className="relative w-full min-w-[200px] h-10  mb-3">

                    <input
                        className="peer  w-full h-full bg-transparent text-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-400 placeholder-shown:border-t-blue-gray-400 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                        placeholder=" "
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                        onBlur={handelBlurEmail}
                        id="" />
                    <label
                        className="flex font-semibold w-full h-full select-none pointer-events-none absolute left-0  peer-placeholder-shown:text-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500">
                        Email</label>
                </div>
                <div className='mb-2'>
                    <span className={esvacio2 ? ' font-semibold text-xs text-red-600' : 'hidden'}>Este campo no puede estar vacío!</span>
                </div>
                <div className="relative w-full min-w-[200px] h-10  mb-4">
                    <input
                        className="peer  w-full h-full bg-transparent text-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-400 placeholder-shown:border-t-blue-gray-400 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                        placeholder=" "
                        name="password"
                        value={userData.password}
                        onChange={handleInputChange}
                        onBlur={handelBlurPass}
                        id="" />
                    <label
                        className="flex font-semibold w-full h-full select-none pointer-events-none absolute left-0  peer-placeholder-shown:text-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500">
                        Contraseña</label>
                </div>

                <button type="submit" onClick={handleLogin}
                    className="inline-block w-full rounded bg-[#3b5998] px-7 pb-2 pt-2 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] hover:bg-[#5f78ad]">
                    Login
                </button>
                <div className="text-center my-5">
                    <p className='text-gray-500'>or continue with these social profile</p>
                </div>
                <div className="flex justify-around w-[80%] mx-auto">
                    <img src={googleLogo} className="w-[45px]" alt="Vite logo" />
                    <img src={fbLogo} className="w-[45px]" alt="Vite logo" />
                    <img src={twLogo} className="w-[45px]" alt="Vite logo" />
                    <img src={githLogo} className="w-[45px]" alt="Vite logo" />
                </div>
                <div className="text-center mt-4">
                    <p className='text-gray-500'>Don´t have an account yet? <a href="/register" className='text-blue-600'>Register</a></p>
                </div>
            </form>
        </div>

    );
};

export default LoginForm;
