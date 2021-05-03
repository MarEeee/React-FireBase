import React from 'react'
import firebase from 'firebase';
import styles from "./ListOfLecture.module.css"
import {Link} from 'react-router-dom'


class ListOfLectures extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            lectures:{},
        }                    
      }
      async componentDidMount(){
        this.setState({
            lectures:(await firebase.database().ref('lectures/').once('value')).val(), //выгружаем из базы список всех лекций, присваиваем их в текушее состояние
        }); 
    }

     takeLecture = (e,item) => {
        this.props.setIdLecture(item); //Обновляем состояние полученое из родительского компонента с целью отловить лекцию за которую пользователь хочет проголосвать
    }                                  //и передачей информации об этой леции в компонент с голосованием.


      render(){
          return(
              <div className = {styles.lectures}>
                  <h1>Lectures</h1>
                  {
                     Object.keys(this.state.lectures).map((item, i)=>{
                         return(
                         <Link to = {"/lecture"} className = {styles.lecture} key = {i} onClick = {e=>this.takeLecture(e,item)}> {/*каждая лекция ссылается на компонент с голосваниием*/}
                                {this.state.lectures[item]['nameLecture']}  
                         </Link>
                         )
                     })
                  }
              </div>
          )
      }
}




export default ListOfLectures;