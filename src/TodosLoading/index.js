import React from "react";
import "./TodosLoading.css"
function TodosLoading(){
    return (
        <div className="LoadingTodo-container">
            <span className="LoadingTodo-completeIcon"></span>
            <p className="LoadingTodo-text">Carganto Todo's</p>
            <p className="LoadingTodo-deleteIcon"></p>
        </div>
    )

}
export {TodosLoading}