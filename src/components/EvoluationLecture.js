import React from 'react'

import good_mark from '../img/iconsForRating/good_mark.jpg'
import satisfactory_mark from '../img/iconsForRating/satisfactory_mark.jpg'
import bad_mark from '../img/iconsForRating/bad_mark.png'

import styles from "./EvaluationLecture.module.css"
import  firebase from 'firebase';


const currentData = {
    idLecture: "421452",
    nameLecture: "Advansed React",
    numberGoodMarks: 42,
    numberSatisfactoryMarks: 356,
    numberBadMarks: 14
}

// idLecture: "fsdf3124",
//     nameLecture: "Basic React",
//     numberGoodMarks: 9,
//     numberSatisfactoryMarks: 32,
//     numberBadMarks: 6

class EvaluationLecture extends React.Component{
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            idLecture: currentData.idLecture,
            nameLecture: currentData.nameLecture,
            numberGoodMarks: currentData.numberGoodMarks,
            numberSatisfactoryMarks: currentData.numberSatisfactoryMarks,
            numberBadMarks: currentData.numberBadMarks
        }
      }
      handleSubmit = ({target: {id}}) => {
        console.log(id)
    };

    btnClick = (e) => {
        if(e.target.id === "good_mark"){
            this.setState({
                numberGoodMarks: ++this.state.numberGoodMarks
            })
        }
        if(e.target.id === "satisfactory_mark"){
                this.setState({
                    numberSatisfactoryMarks: ++this.state.numberSatisfactoryMarks
                })
        }
        if(e.target.id === "bad_mark") {
                this.setState({
                    numberBadMarks: ++this.state.numberBadMarks
                })
            }
        // console.log(this.state)
        // firebase.auth()
        //     .catch(error => console.log(error))
        firebase.database().ref('lectures/' + this.state.idLecture).set(this.state);
    };

    componentDidMount(){
        const database = firebase.database();
        // console.log(database);
    }

    render(){
        return(
            <div className = {styles.evaluation_lecture__form}>
                <h1 className = {styles.evaluation_lecture__name}>{this.state.nameLecture}</h1>
                
                 <div className = {styles.evaluation_lecture__buttons}>
                    <button id = "good_mark" className = {styles.button + " " + styles.good_mark}   onClick = {this.btnClick}></button>

                    <button id = "satisfactory_mark" className = {styles.button + " " + styles.satisfactory_mark} onClick = {this.btnClick}></button>

                    <button id = "bad_mark" className = {styles.button + " " + styles.bad_mark} onClick = {this.btnClick}></button>
                </div>
                
                
               


                <h2>Statistics</h2>
                <ul className = {styles.evaluation_lecture__statistics}>
                    <li className = "">
                        <img src = {good_mark} style = {{wight: "50px", height: "50px"}}></img>
                        <span>{this.state.numberGoodMarks}</span>
                    </li>

                    <li className = "">
                        <img src = {satisfactory_mark} style = {{wight: "50px", height: "50px"}}></img>
                        <span>{this.state.numberSatisfactoryMarks}</span>
                    </li>

                    <li className = "">
                        <img src = {bad_mark} style = {{wight: "50px", height: "50px"}}></img>
                        <span>{this.state.numberBadMarks}</span>
                    </li>
                </ul>
                
            </div>
        )
    }
}

export default EvaluationLecture;