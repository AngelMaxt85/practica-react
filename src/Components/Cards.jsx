import React from "react";
import estilo from "./testimonioDesign.module.scss"

export default function Cards(props) {
    return (
        <div className={estilo.Cards} id={props.id} >
            <img src={props.imagen} alt="ReactTest" className={estilo.imagen} />
            <div className={estilo.conetendor__testimonio} >
                <p className={estilo.nombre__testimonio} ><span className={estilo.bold}>{props.nombre}</span> en {props.pais}</p>
                <p className={estilo.cargo__testimonio}> {props.cargo} en <span className={estilo.bold}>{props.empresa}</span> </p>
                <p className={estilo.texto__testimonio} >{props.testimonio}</p>
            </div>
        </div>
    )
}