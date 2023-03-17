import { useState,useEffect } from "react";
import { Error } from "./Error";

export const Formulario = ({ pacientes, setPacientes, paciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

 useEffect(()=>{
  if( Object.keys(paciente).length > 0 ){
    setNombre(paciente.nombre)
    setNombre(paciente.propietario)
    setNombre(paciente.email)
    setNombre(paciente.fecha)
    setNombre(paciente.sintomas)
  }
 },[paciente])

  const generarId = () =>{
    const ramdom = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)
    return ramdom + fecha
  }
  const handelSubmit = (e) => {
    e.preventDefault();

    //Validacion del Formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log("hay al menos un campo vacio");
      setError(true);
      return;
    }
    setError(false);

    const ObjetoPacientes = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      id: generarId()
    };

    if(paciente.id) {
     //Editando El Registro
     ObjetoPacientes.id = paciente.id
     console.log(ObjetoPacientes)


     const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === 
      paciente.id ? ObjetoPacientes : pacienteState)

    } else {

      //Nuevo Registro
      ObjetoPacientes.id = generarId();
      setPacientes([...pacientes, ObjetoPacientes]);

    }


    
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2
        className="font-black text-3xl
  text-center"
      >
        Seguimientos Pacientes
      </h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold ">Administralos </span>
      </p>
      <form
        onSubmit={handelSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <Error>
            <p>TODOS LOS CAMPOS SON OBLIGATORIOS</p>
          </Error>
        )}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            NOMBRE MASCOTA
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="date"
            className="block text-gray-700 uppercase font-bold"
          >
            EMAIL
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email Contacto/Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            ALTA
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="block text-gray-700 uppercase font-bold"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-color"
          value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente' }
        />
      </form>
    </div>
  );
};
