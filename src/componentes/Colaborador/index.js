import "./Colaborador.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"

//con el id vamos a indicarle al programa que vamos a eliminar para que esto funcione debemos de poner el arrow function como se ve en eliminar colaborador
const Colaborador = (props) => {
    const {nombre, puesto, foto, equipo, id, fav} = props.datos
    const {colorPrimario, eliminarColaborador, like} = props

    //condicion ? verdadero : false
    return  <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={() =>eliminarColaborador(id)}/>
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color="red" onClick={() => like(id)}/> : <AiOutlineHeart  onClick={() => like(id)} /> }
        </div>
    </div>
}
export default Colaborador