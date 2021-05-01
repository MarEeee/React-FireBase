import './App.css';
import EvaluationLecture from "./components/EvaluationLecture/EvaluationLecture"
import ListOfLectures from "./components/ListOfLecture/ListOfLecture"
import  firebase from 'firebase';

import {useState} from 'react'
import {Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
let qrID = "0"; // из QR кода получаем id, по которому находим нужную лекцию в бд


function App() {
  const [idLecture, setIdLecture] = useState(qrID);
  return (
    <div className="App">
      <BrowserRouter>
      
        {/* <Route path = "/" component = {ListOfLectures}></Route> */}
        <Route exact  path = "/home"  render ={() =>( 
            <ListOfLectures idLecture={idLecture} setIdLecture ={setIdLecture}/>
          )}>
        </Route >
        <Route path = "/lecture" render = {()=>(
            <EvaluationLecture idLecture={idLecture}/>
          )}>
        </Route>
        {/* <ListOfLecture/> */}
        {/* <EvaluationLecture idLecture = {idLecture}/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
