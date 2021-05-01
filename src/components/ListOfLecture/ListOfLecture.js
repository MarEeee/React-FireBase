import React from 'react'
import  firebase from 'firebase';
import EvaluationLecture from "../EvaluationLecture/EvaluationLecture"
import styles from "./ListOfLecture.module.css"
import {Link} from 'react-router-dom'


class ListOfLectures extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            lectures:{},
            isLoading: false,
            showLecture:false,
            activeLecture: 0
        }                    
      }
      async componentDidMount(){
        this.setState({
            lectures:(await firebase.database().ref('lectures/').once('value')).val(),
            isLoading: true
        }); 
    }

     takeLecture = (e,item) => {
        // e.preventDefault();
        console.log(this.props)
        this.props.setIdLecture(item);
        console.log(this.props.idLecture);
        
        // console.log(this.state.showLecture)
    }


      render(){
          return(
              <div className = {styles.lectures}>
                  {/* {this.state.showLecture?<EvaluationLecture idLecture = {this.state.activeLecture}/>: 
                  <> */}
                  <h1>Lectures</h1>
                  {
                     Object.keys(this.state.lectures).map((item, i)=>{
                         return(
                         <Link to = {"/lecture"} className = {styles.lecture} key = {i} onClick = {(e)=>this.takeLecture(e, item)}>
                                {this.state.lectures[item]['nameLecture']}
                         </Link>
                         )
                     })
                  }
                  {/* </>
                } */}
              </div>
          )
      }
}




export default ListOfLectures;