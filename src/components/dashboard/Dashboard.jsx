import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export const Dashboard = () => {
    const navigate = useNavigate();
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
            navigate('/');
        }
        const data = await response.json();
    };
    return tokenExists ? (
        <>
            <div className="min-h-screen bg-gray-50/50 ">
                <aside
                    className="bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50h-[calc(100vh-32px)] w-72  transition-transform duration-300 xl:translate-x-0">
                    <div className="relative border-b border-white/20">
                        <a className="flex items-end gap-4 py-4 px-5" href="/dashboard">
                            <h6
                                className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-relaxed text-white">
                                Administración</h6>
                        </a>

                    </div>

                    <div className="relative border-b border-white/20 py-4">
                        <h3 className="ml-8 tracking-normal font-sans text-xl font-semibold leading-relaxed text-white ">
                            General y Seguridad</h3>
                    </div>

                    <div className="m-4">
                        <ul className="mb-4 flex flex-col gap-1">
                            <li>
                                <a className="" href="/roles">
                                    <button
                                        className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-1 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                                        type="button">
                                        <i className="fa-solid fa-user-gear text-base"></i>
                                        <p
                                            className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                                            roles</p>
                                    </button>
                                </a>
                            </li>
                            <li>
                                <a className="" href="/usuarios">
                                    <button
                                        className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-1 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                                        type="button">
                                        <i className="fa-solid fa-users text-base"></i>
                                        <p
                                            className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                                            usuarios</p>
                                    </button>
                                </a>
                            </li>
                            <li>
                                <a className="" href="bitacora">
                                    <button
                                        className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-1 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                                        type="button">
                                        <i className="fa-solid fa-bars text-base"></i>
                                        <p
                                            className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                                            bitacoras</p>
                                    </button>
                                </a>
                            </li>
                            <li>
                                <a className="" href="/pagina">
                                    <button
                                        className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-1 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                                        type="button">
                                        <i className="fa-solid fa-link text-base"></i>
                                        <p
                                            className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                                            páginas</p>
                                    </button>
                                </a>
                            </li>


                        </ul>

                    </div>
                </aside>
                <div className="p-4 xl:ml-72 ">
                    <nav
                        className="block w-full  max-w-full bg-transparent text-white shadow-none rounded-xl transition-all px-0 py-1">
                        <div className=" flex-col-reverse gap-6 md:flex-row md:items-center flex justify-end">

                            <div className="flex items-center">


                                <button
                                    onClick={handleLogout}
                                    className="middle hover:text-red-700 none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-black hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-2 px-4 capitalize"
                                    type="button">
                                    <i className="fa-solid fa-right-from-bracket fa-flip-horizontal text-base"></i>
                                    <p
                                        className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                                        Cerrar sesion</p>
                                </button>


                            </div>
                        </div>
                    </nav>
                    <div className="mt-2">
                        <div className="w-[95%] mx-auto flex justify-between items-center">
                            <h3
                                className="block antialiased tracking-normal font-sans text-lg capitalize font-semibold leading-relaxed mb-3">
                                dashboard</h3>
                        </div>
                        <div className="w-[95%] mx-auto">
                            <div
                                className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2 ">
                                <div
                                    className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
                                    <div>
                                        <h6
                                            className="block antialiased tracking-normal font-sans text-base capitalize font-semibold leading-relaxed  mb-1">
                                            bienvenido</h6>
                                        <p>Selecciona la acción que quieras realizar en las pestañas del menu de la izquierda
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    ) : null;
};

export default Dashboard;
