import { useState } from "react";
import "./App.css";
import ToDo from "./components/ToDo";
import ToDoForm from "./components/ToDoForm";

export interface IToDo {
  title: string;
  done: boolean;
}

function App() {
  const [toDos, setToDos] = useState<IToDo[]>([]);

  const handleAdd = (newToDo: string) => {
    if (newToDo !== "") {
      const newTodos: IToDo[] = [...toDos, { title: newToDo, done: false }];
      setToDos(newTodos);
    }
  };

  const handleDelete = (toDo: IToDo) => {
    const newTodos = toDos.filter((t) => t.title !== toDo.title);
    setToDos(newTodos);
  };

  const handleCheck = (
    event: React.ChangeEvent<HTMLInputElement>,
    toDo: IToDo
  ) => {
    if (event.target.checked) {
      const objIndex = toDos.findIndex((obj) => obj.title == toDo.title);
      toDos.splice(objIndex, 1, {
        title: toDo.title,
        done: true,
      });
    } else {
      const objIndex = toDos.findIndex((obj) => obj.title == toDo.title);
      toDos.splice(objIndex, 1, {
        title: toDo.title,
        done: false,
      });
    }
  };

  return (
    <div className="app">
      <div className="containerToDoList">
        <h1>My to-do list</h1>
        <ToDoForm handleAdd={handleAdd} />
        <div>
          {toDos.map((toDo, index) => (
            <ToDo
              key={index}
              toDo={toDo}
              handleDelete={handleDelete}
              handleCheck={handleCheck}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
