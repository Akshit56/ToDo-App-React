
import AppName from "./components/AppName";

import AddToDO from "./components/AddToDo";

function App() {
  return <center className = 'todo-container'><AppName />
  
  <div class="container text-center">
  <AddToDO />
  <AddToDO />

  <div class="row">
    <div class="col-6">Buy Milk</div>
    <div class="col-4">15/10/2023</div>
    <div class="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
  </div>

  <div class="row">
    <div class="col-6">Go to college</div>
    <div class="col-4">4/10/2023</div>
    <div class="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
  </div>

</div>
  
  </center>
}
export default App