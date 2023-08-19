import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
    console.log(props)      
//estado - hooks funcionalidades que nos ayudan a trabajar con el entorno de react
//useState
//useState();
// const [nombredevariable, funcion a actualizar] = useState(valor inicial);
//esta utilizando el estado 
//const [nombre,actualizarNombre] = useState();
   /* const [mostrar, actualizarMostrar]= useState(true);
    const manejarClick = () => { 
        console.log("Mostrar/Ocultar elemento", !mostrar);    
        actualizarMostrar(!mostrar); 
    }*/
    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
};      

export default MiOrg    