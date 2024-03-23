
import AppName from "./components/AppName";

import AddToDO from "./components/AddToDo";

import ToDoItem1 from "./components/ToDoItem1";

import ToDoItem2 from "./components/ToDoItem2";

function App() {
  return <center className = 'todo-container'><AppName />
  
  <div class="container text-center">
  <AddToDO />
  <AddToDO />

  <ToDoItem1 />
  <ToDoItem2 />

  

</div>
  
  </center>
}
export default App