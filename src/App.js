import './App.css';
import EvaluationLecture from "./components/EvoluationLecture"
let idLecture = "421452"; // из QR кода получаем id, по которому находим нужную лекцию в бд
function App() {

  return (
    <div className="App">
        <EvaluationLecture idLecture = {idLecture}/>
    </div>
  );
}

export default App;
