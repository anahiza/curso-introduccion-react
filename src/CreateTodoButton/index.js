import React from "react";
import "./CreateTodoButton.css"
function CreateTodoButton(props)
{

    const onClickButton=(mensaje)=>
    {
        alert(mensaje)
    }


    return (
        <button className="CreateTodoButton"
        onClick={()=>onClickButton("hola")}>
            +
        </button>
    )
}

export {CreateTodoButton};