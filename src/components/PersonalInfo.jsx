import React, { useState } from 'react';
import devLogo from '../assets/devchallenges-light.svg'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export const PersonalInfo = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tokenExists, setTokenExists] = useState(false);
    // const [logout,setLogout] = useState({});

    useEffect(() => {
        const fetchProfileData = async () => {

            const rawToken = sessionStorage.getItem('token');
            const token = rawToken ? rawToken : null;
            if (rawToken == null) {
                navigate('/login');
              } else {
                setTokenExists(true);
              }
            try {

                const response = await fetch('http://127.0.0.1:8000/api/auth/me', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`Error al obtener datos del perfil: ${response.statusText}`);
                }

                const data = await response.json();
                setUserData(data);
                
                
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProfileData();
        
    }, []); 

    
    // if (loading) {
    //     return <p>Cargando...</p>;
    // }

    // if (error) {
    //     return <p>Error: {error}</p>;
    // }

    //cerrar session
    const handleLogout = async () => {
        //Obtén el token de tu almacenamiento (ajusta esto según tu lógica)
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
                <div className='text-center mt-10'>
                    <h2 className='text-xl font-bold text-gray-600'>Personal info</h2>
                    <p className='text-xs text-gray-600'>Basic info, like your name and photo</p>
                </div>

                <div className="">
                    <ul className=' border-[1px] border-slate-500 border-solid rounded-[15px]  my-4 w-[80%] mx-auto flex-col'>
                        <li className="flex gap-2 justify-between items-center border-b-[1px] border-slate-500 border-solid px-8 py-6">
                            <div className="w-[30%]">
                                <h4 className='text-xl font-semibold text-gray-600'>Profile</h4>
                                <p className='text-xs  text-gray-600'>Some info may be visible to other people</p>
                            </div>
                            <div className="">
                                <a href="/changeInfo">
                                    <button className='border-[1px] border-slate-500 border-solid rounded-[10px] py-1 px-6 font-semibold text-gray-600 hover:bg-slate-500 hover:text-white'>
                                        Editar
                                    </button>
                                </a>
                            </div>
                        </li>
                        <li className="flex gap-2 items-center border-b-[1px] border-slate-500 border-solid px-8 py-6">
                            <div className="w-[30%] text-xs font-semibold text-gray-600">
                                <p>USUARIO/CORREO</p>
                            </div>
                            <div className="text-xs font-semibold text-gray-600">{userData.email}</div>
                        </li>
                        <li className="flex gap-2 items-center border-b-[1px] border-slate-500 border-solid px-8 py-6">
                            <div className="w-[30%] text-xs font-semibold text-gray-600">
                                <p>NOMBRES</p>
                            </div>
                            <div className="text-xs font-semibold text-gray-600">{userData.name ?? "Null"}</div>
                        </li>
                        <li className="flex gap-2  items-center border-b-[1px] border-slate-500 border-solid px-8 py-6">
                            <div className="w-[30%] text-xs font-semibold text-gray-600">
                                <p>APELLIDOS</p>
                            </div>
                            <div className="text-xs font-semibold text-gray-600">{userData.name ?? "Null"}</div>
                        </li>
                        <li className="flex gap-2 items-center  px-8 py-6">
                            <div className="w-[30%] text-xs font-semibold text-gray-600">
                                <p>PASSWORD</p>
                            </div>
                            <div className="text-xs font-semibold text-gray-600">
                                <p>*************</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    ) : null;
};

export default PersonalInfo;
