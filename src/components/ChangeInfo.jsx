import React, { useState, useEffect } from 'react';
import devLogo from '../assets/devchallenges-light.svg'
import { useNavigate } from 'react-router-dom';


export const ChangelInfo = () => {
    const navigate = useNavigate();
    const [pnombre, setPnombre] = useState('');
    const [snombre, setSnombre] = useState('');
    const [papellido, setPapellido] = useState('');
    const [sapellido, setSapellido] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [tokenExists, setTokenExists] = useState(false);

  useEffect(() => {
      const rawToken = sessionStorage.getItem('token');

      if (rawToken == null) {
        navigate('/login');
      } else {
        setTokenExists(true);
      }
  }, [navigate]);

    //cerrar session
    const handleLogout = async () => {
        const rawToken = sessionStorage.getItem('token');
        const token = rawToken ? rawToken : null;

        const response = await fetch('http://127.0.0.1:8000/api/auth/logout', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            sessionStorage.removeItem('token');
            navigate('/login');
        }
        const data = await response.json();
    };
    return tokenExists ? (
        <>
            <header>
                <nav className="bg-gray-500 p-4 ">
                    <div className="container mx-auto flex items-center justify-between w-[90%] ">
                        {/* Logo o nombre de la aplicación */}
                        <img src={devLogo} className="w-[170px]" alt=" logo" />

                        {/* Enlaces de navegación */}
                        <ul className="flex space-x-4 items-center">
                            <li><p className='text-white font-semibold text-xs'>NOMBRE DEL USUARIO</p></li>
                            <li className="relative group">
                                <a href="#" className="text-white font-semibold text-sm hover:underline uppercase "><i className="fa-solid fa-gear"></i> Opciones</a>
                                {/* Dropdown con retraso y ancho personalizado */}
                                <ul className="absolute hidden bg-white text-black group-hover:block transition-delay-1000 w-[150px] ">
                                    <li className="hover:bg-gray-100 p-2 pl-3 font-semibold"><a href="/personalInfo" className='text-gray-600 font-bold text-sm flex gap-3 items-center'><i className="fa-solid fa-user "></i> <span>Mi Perfil</span></a></li>
                                    <li className="hover:bg-gray-100 p-2 pl-3 font-semibold"><a href="/dashboard" className='text-gray-600 font-bold text-sm flex gap-3 items-center'> <i className="fa-solid fa-house"></i><span>Dashboard</span></a></li>
                                    <li className="hover:bg-gray-100 p-2 pl-3 font-semibold border-t-[1px] border-slate-500 border-solid">
                                        <button onClick={handleLogout} className='text-red-800 font-bold text-sm flex gap-3 items-center'><i className="fa-solid fa-right-from-bracket fa-flip-horizontal "></i> <span>Cerrar Sesión</span></button>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main className='w-[70%] mx-auto'>
                <div className='mt-5'>
                    <a href="/personalInfo" className='text-blue-600 underline hover:text-blue-900'><i className="fa-solid fa-right-from-bracket fa-flip-horizontal "></i> <span>Back</span></a>
                </div>
                <form action="" method="post" name="loginForm" className=' border-[1px] border-slate-500 border-solid rounded-[20px] px-10 py-5 my-6 w-[400px] mx-auto flex-col'>
                    <div className='mb-4'>
                        <h2 className='font-semibold my-1 text-lg'>Change Info</h2>
                        <p className='text-gray-700 text-sm my-1'>Changes will be reflected to every services</p>
                    </div>
                    <div className="relative w-full min-w-[200px] h-10  mb-3">
                        <input
                            className="peer  w-full h-full bg-transparent text-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-400 placeholder-shown:border-t-blue-gray-400 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                            placeholder=" "
                            name="pnombre"
                            value={pnombre}
                            onChange={(e) => setPnombre(e.target.value)}
                            id="" />
                        <label
                            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500">
                            Primer Nombre</label>
                    </div>
                    <div className="relative w-full min-w-[200px] h-10  mb-4">
                        <input
                            className="peer  w-full h-full bg-transparent text-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-400 placeholder-shown:border-t-blue-gray-400 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                            placeholder=" "
                            name="snombre"
                            value={snombre}
                            onChange={(e) => setSnombre(e.target.value)}
                            id="" />
                        <label
                            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500">
                            Segundo Nombre</label>
                    </div>
                    <div className="relative w-full min-w-[200px] h-10  mb-4">
                        <input
                            className="peer  w-full h-full bg-transparent text-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-400 placeholder-shown:border-t-blue-gray-400 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                            placeholder=" "
                            name="papellido"
                            value={papellido}
                            onChange={(e) => setPapellido(e.target.value)}
                            id="" />
                        <label
                            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500">
                            Primer Apellido</label>
                    </div>
                    <div className="relative w-full min-w-[200px] h-10  mb-4">
                        <input
                            className="peer  w-full h-full bg-transparent text-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-400 placeholder-shown:border-t-blue-gray-400 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                            placeholder=" "
                            name="sapellido"
                            value={sapellido}
                            onChange={(e) => setSapellido(e.target.value)}
                            id="" />
                        <label
                            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500">
                            Segundo Apellido</label>
                    </div>
                    <div className="relative w-full min-w-[200px] h-10  mb-4">
                        <input
                            className="peer  w-full h-full bg-transparent text-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-400 placeholder-shown:border-t-blue-gray-400 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                            placeholder=" "
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="" />
                        <label
                            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500">
                            Email</label>
                    </div>
                    <div className="relative w-full min-w-[200px] h-10  mb-4">
                        <input
                            className="peer  w-full h-full bg-transparent text-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-400 placeholder-shown:border-t-blue-gray-400 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                            placeholder=" "
                            name="pass"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            id="" />
                        <label
                            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500">
                            Password</label>
                    </div>

                    <div >
                        <button type="submit"
                            className="inline-block rounded bg-[#3b5998] px-7 pb-2 pt-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                            Guardar
                        </button>
                    </div>

                </form>
            </main>
        </>
    ) : null;
};

export default ChangelInfo;
