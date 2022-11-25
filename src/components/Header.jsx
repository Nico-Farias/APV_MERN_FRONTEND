import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Header = () => {
    const { cerrarSesion } = useAuth()

    return (

        <header className='py-10 bg-indigo-600'>
            <div className='container mx-auto flex justify-between items-center flex-col lg:flex-row'>
                <h1 className='font-bold text-2xl text-center text-indigo-200'>Administrador de paciente de {''} <span className='text-white font-black'>Veterinaria</span></h1>

                <nav className='flex gap-4 flex-col items-center lg:flex-row mt-5 lg:mt-0'>
                    <Link to={"/admin"} className='text-white text-xl uppercase font-bold'>Pacientes</Link>
                    <Link to={"/admin/perfil"} className='text-white text-xl uppercase font-bold'>Perfil</Link>

                    <button type='button'
                        onClick={cerrarSesion}
                        className='text-white text-xl uppercase font-bold'>Cerrar sesion</button>

                </nav>

            </div>

        </header>
    )
}

export default Header