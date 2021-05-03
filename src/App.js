import './App.css';
import EvaluationLecture from "./components/EvaluationLecture/EvaluationLecture"
import ListOfLectures from "./components/ListOfLecture/ListOfLecture"


import {useState} from 'react'
import {Route, BrowserRouter, Redirect} from 'react-router-dom'

let qrID = "0"; // из QR кода получаем id, по которому находим нужную лекцию в бд


function App() {
  const [idLecture, setIdLecture] = useState(qrID); // обробатка состояний в функциональном компоненте
  return (
    <div className="App">
      <BrowserRouter>

        <Route path = "/home"  render ={() =>(    
            <ListOfLectures idLecture={idLecture} setIdLecture ={setIdLecture}/> //Настраиваем роутинг для перехода между компонентами. ССылка список всех лекций.
          )}>
        </Route >

        <Route path = "/lecture" render = {()=>(
            <EvaluationLecture idLecture={idLecture}/> //Ссылка на компонент с голосванием за конкретную лекцию.
          )}>
        </Route>

        <Redirect exact from="/" to="/home" /> {/*Устанавливаем адрес по умолчанию */}
        
      </BrowserRouter>
    </div>
  );
}

export default App;
