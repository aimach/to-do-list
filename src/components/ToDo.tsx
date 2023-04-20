import "./ToDo.css";
import { IToDo } from "../App";

interface IToDoProps {
  toDo: IToDo;
  handleDelete: (arg0: IToDo) => void;
  handleCheck: (arg0: React.ChangeEvent<HTMLInputElement>, arg1: IToDo) => void;
}

const ToDo = ({ toDo, handleDelete, handleCheck }: IToDoProps) => {
  return (
    <div className="toDoContainer">
      <input
        type="checkbox"
        id={toDo.title}
        name={toDo.title}
        onChange={(event) => handleCheck(event, toDo)}
      />
      <div className="labelAndButton">
        <label htmlFor={toDo.title}>{toDo.title}</label>
        <button onClick={() => handleDelete(toDo)}>x</button>
      </div>
    </div>
  );
};

export default ToDo;
