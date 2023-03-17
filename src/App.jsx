import { Formulario } from "./Components/Formulario";
import { Header } from "./Components/Header";
import { ListadoPacientes } from "./Components/ListadoPacientes";
import "./index.css";
import { useState,useEffect } from "react";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState([]);

  useEffect(() => {
    const obtenerLS = () =>{
      
    }
  
  }, [])

  useEffect(() =>{
  console.log('Componente listo o cambio pacientes')
  },[pacientes])

 useEffect(() => {
  localStorage.setItem('paciente',JSON.stringify(pacientes));

 
 }, [pacientes])
  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id != id);
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario 
        setPacientes={setPacientes}
        pacientes={pacientes} 
        paciente={paciente}

        />
        
        <ListadoPacientes 
        pacientes={pacientes}
        setPaciente={setPaciente}
       eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
