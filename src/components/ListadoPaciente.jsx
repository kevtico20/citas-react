import React from 'react'
import Paciente from './Paciente'
function ListadoPaciente({ pacientes,setPaciente,eliminarPaciente }) {

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      {
        pacientes && pacientes.length ? (
          <>
            <h2 className='text-center text-3xl font-black'>Listado Paciente</h2>
            <p className='text-xl mt-5 mb-10 text-center'>Administra tus {" "} <span className='text-indigo-600 font-bold'>Pacientes y citas</span></p>

            {pacientes.map((paciente) => (

              <Paciente
                paciente={paciente}
                key={paciente.id}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              ></Paciente>
            ))}

          </>
        ) : (<>
        
        <h2 className='text-center text-3xl font-black'>No Hay Pacientes</h2>
            <p className='text-xl mt-5 mb-10 text-center'>Comienza agregando pacientes {" "} <span className='text-indigo-600 font-bold'>y apareceran en este lugar</span></p>
        
        </>)
      }
    </div>
  )
}

export default ListadoPaciente
