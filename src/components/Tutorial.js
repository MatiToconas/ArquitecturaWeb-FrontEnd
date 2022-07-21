import React, {useState} from 'react'

const Tutorial = ({idTutorial, nombreTutorial, url, tipoTutorial, activo, borrar, cambiarActivo, cambiarTipo}) => {
    const [tipo, setTipo] = useState(tipoTutorial);

    const actualizarTipo = (e) => {
        cambiarTipo(idTutorial, e.target.value);
        setTipo(e.target.value);
    }
    return (
        <div className="tutorial">
            <select value={tipo} onChange={actualizarTipo} className="campo-tutorial">
                <option value="Abogacia">Abogacia</option>
                <option value="Enfermeria">Enfermeria</option>
                <option value="Profesorado de Ingles">Profesorado de Ingles</option>
            </select>
            <h6 className="campo-tutorial">{nombreTutorial}</h6>
            <button onClick={()=> cambiarActivo(idTutorial)} className="campo-tutorial btn-activar">{activo ? 'Desactivar' : 'Activar Link'}</button>
            <button onClick={()=> borrar(idTutorial)} className="campo-tutorial btn-borrar">Borrar</button>
            <a href={url} target = "_blank" style={{ display: activo ? "" : "none" }} className="campo-tutorial">Link tutorial</a>
        </div>
    )
}

export default Tutorial;