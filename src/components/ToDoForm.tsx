import { useState } from "react";
import "./ToDoForm.css";

interface IToDoProps {
  handleAdd: (arg0: string) => void;
}

const ToDoForm = ({ handleAdd }: IToDoProps) => {
  const [newToDo, setNewToDo] = useState("");

  return (
    <div className="toDoForm">
      <input
        type="text"
        value={newToDo}
        onChange={(event) => setNewToDo(event.target.value)}
      />
      <button
        onClick={() => {
          handleAdd(newToDo);
          setNewToDo("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default ToDoForm;
