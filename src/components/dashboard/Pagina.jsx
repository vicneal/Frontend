import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

export const Pagina = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [urlValue, setRolValue] = useState('');
    const [nombreValue, setNombreValue] = useState('');
    const [descripcionValue, setDescripcionValue] = useState('');

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

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleFormSubmit = (event) => {
        // Lógica para manejar el envío del formulario
        event.preventDefault();
        // ... (puedes agregar lógica adicional aquí)
        // Cierra el modal después de enviar el formulario
        closeModal();
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
                                <a className="" href="/bitacora">
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
                    <div className="mt-6">

                        <div className="w-[95%] mx-auto flex justify-between items-center">
                            <h3
                                className="block antialiased tracking-normal font-sans text-lg capitalize font-semibold leading-relaxed mb-5">
                                Información de Enlaces</h3>
                            <button type=""
                                className="bg-blue-700 text-white font-bold py-2 px-4 capitalize rounded mb-5  hover:bg-blue-400"
                                onClick={openModal}>
                                <i className="fa-solid fa-plus mr-2"></i>
                                agregar Nuevo Enlace</button>

                        </div>
                        <div className="w-[95%] mx-auto">
                            <div
                                className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2 ">

                                <div className="p-6  px-0 pt-0 pb-2">
                                    <table className="w-full min-w-[840px] table-auto ">
                                        <thead>
                                            <tr>
                                                <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                                                    <p
                                                        className="block antialiased font-sans text-[13px]  capitalize text-blue-gray-400 font-bold">
                                                        ID de la Página</p>
                                                </th>
                                                <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                                                    <p
                                                        className="block antialiased font-sans text-[13px]  capitalize text-blue-gray-400 font-bold">
                                                        URL</p>
                                                </th>
                                                <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                                                    <p
                                                        className="block antialiased font-sans text-[13px]  capitalize text-blue-gray-400 font-bold">
                                                        Nombre de la Página</p>
                                                </th>
                                                <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                                                    <p
                                                        className="block antialiased font-sans text-[13px]  capitalize text-blue-gray-400 font-bold">
                                                        Descripción</p>
                                                </th>
                                                <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                                                    <p
                                                        className="block antialiased font-sans text-[13px]  capitalize text-blue-gray-400 font-bold">
                                                        Creado</p>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr className=" hover:bg-[#c3dff9]">
                                                <td className="py-2 px-5 border-b border-blue-gray-50">
                                                    <p className="block antialiased font-sans text-xs text-blue-gray-900 font-bold">
                                                        ghghfghfgh</p>
                                                </td>
                                                <td className="py-2 px-5 border-b border-blue-gray-50">
                                                    <p
                                                        className="block antialiased font-sans text-xs  text-blue-gray-900 font-bold">
                                                        fhfghfhfg</p>
                                                </td>
                                                <td className="py-2 px-5 border-b border-blue-gray-50 ">

                                                    <p
                                                        className="inline-block py-[2px] px-[6px] rounded-md antialiased font-sans text-xs capitalize text-white font-bold bg-[#53b164]">
                                                        Activo</p>

                                                    <p
                                                        className="inline-block py-[2px] px-[6px] rounded-md antialiased font-sans text-xs capitalize text-white font-bold bg-[#ce464c]">
                                                        Inactivo</p>
                                                </td>

                                                <td className="py-2 px-5 border-b border-blue-gray-50">

                                                    <p
                                                        className="block antialiased font-sans text-xs  text-blue-gray-900 font-bold">
                                                        fhfghfhfg</p>
                                                </td>
                                                <td className="py-2 px-5 border-b border-blue-gray-50">

                                                    <p
                                                        className="block antialiased font-sans text-xs  text-blue-gray-900 font-bold">
                                                        fhfghfhfg</p>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div >

                </div >
            </div >
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Agregar Rol"
                className="Modal bg-white p-7 rounded-[10px] border-[2px] w-[25%]"
                overlayClassName="Overlay"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1000,
                    },
                    content: {
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        transform: 'translate(-50%, -50%)',
                        maxWidth: '80%',
                        maxHeight: '80%',
                        overflow: 'auto',
                        zIndex: 1001,
                    },
                }}
            >
                <h2 className='font-semibold mb-3'>Agregar Nuevo Página</h2>

                <form onSubmit={handleFormSubmit}>
                    <div className="relative w-full min-w-[200px] h-10 mb-4">
                        <input
                            className="peer w-full h-full bg-transparent text-gray-700 font-sans font-normal outline outline-0 focus:outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-400 placeholder-shown:border-t-blue-gray-400 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                            placeholder=" "
                            name="url"
                            value={urlValue}
                            onChange={(e) => setRolValue(e.target.value)}
                        />
                        <label
                            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-gray-700 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500">
                            URL
                        </label>
                    </div>
                    <div className="relative w-full min-w-[200px] h-10 mb-4">
                        <input
                            className="peer w-full h-full bg-transparent text-gray-700 font-sans font-normal outline outline-0 focus:outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-400 placeholder-shown:border-t-blue-gray-400 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                            placeholder=" "
                            name="nombre"
                            value={nombreValue}
                            onChange={(e) => setNombreValue(e.target.value)}
                        />
                        <label
                            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-gray-700 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500">
                            Nombre
                        </label>
                    </div>
                    <div className="relative w-full min-w-[200px] h-10 mb-4">
                        <input
                            className="peer w-full h-full bg-transparent text-gray-700 font-sans font-normal outline outline-0 focus:outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-400 placeholder-shown:border-t-blue-gray-400 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                            placeholder=" "
                            name="descripcion"
                            value={descripcionValue}
                            onChange={(e) => setDescripcionValue(e.target.value)}
                        />
                        <label
                            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-gray-700 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500">
                            Descripción
                        </label>
                    </div>

                    <div className="flex justify-end gap-4">
                        <button
                            className="bg-gray-600 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-gray-400"
                            onClick={closeModal}
                        >
                            Cerrar
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-blue-400"
                        >
                            Guardar Cambios
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    ) : null;
};

export default Pagina;
