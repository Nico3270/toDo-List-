import React from "react";


function ToDoItem(props) {
    const [decoration, setDecoration] = React.useState("");
    function textStyle(){
        decoration === "" ? setDecoration("line-through"):setDecoration("")
    }

  return (
    <div onClick={textStyle}>
      <li style={{ textDecoration: decoration }}>{props.item}</li>
    </div>
  );
}

export default ToDoItem;
