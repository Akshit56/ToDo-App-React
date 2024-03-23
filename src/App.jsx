import AppName from "./components/AppName";
import AddToDO from "./components/AddToDo";
import ToDoItem1 from "./components/ToDoItem1";
import ToDoItem2 from "./components/ToDoItem2";
import "./App.css";

function App() {
  return (
  <center className = 'todo-container'>
  <AppName />
  <AddToDO />
  <AddToDO />
  <ToDoItem1 />
  <ToDoItem2 />
  </center>
  );
}

export default App
