import React from "react";
import ToDoItem from "./ToDoItem";

//En el Hook itemList se guarda el estado o el contenido que se ingresa en el input
//En el Hook tareas se almacenan los elementos de la lista

function App() {
  const [itemList, setItemList] = React.useState("");
  const [tareas, setTareas] = React.useState([]);

  ////Convertir los elementos de la lista en react components
  const ListaFinal = tareas.map((tarea, index) => <ToDoItem item={tarea} />);
  function newItem(event) {
    setItemList(event.target.value);
  }
  function addElement() {
    //Utilizando el operador spread se añade el elemento a la lista  inicial
    setTareas([...tareas, itemList]);
    setItemList(""); /// Limpiar el input después de agregar la tarea
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={newItem} value={itemList} type="text" />
        <button type="button" onClick={addElement}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{ListaFinal}</ul>
      </div>
    </div>
  );
}

export default App;
