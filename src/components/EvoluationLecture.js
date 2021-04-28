import React from 'react'

import good_mark from '../img/iconsForRating/good_mark.jpg'
import satisfactory_mark from '../img/iconsForRating/satisfactory_mark.jpg'
import bad_mark from '../img/iconsForRating/bad_mark.png'

import styles from "./EvaluationLecture.module.css"
import  firebase from 'firebase';
import uuid from 'react-uuid'

const idLecture = "421452";
var currentData = {
    idLecture: "421452",
    nameLecture: "Advansed React",
    numberGoodMarks: 42,
    numberSatisfactoryMarks: 356,
    numberBadMarks: 14
}



class EvaluationLecture extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            lecture:currentData,
            isVoted: localStorage.getItem(idLecture) === null ? false : true,
        }
      }

    btnClick = (e) => {
        if(e.target.id === "good_mark"){
            this.setState({
                numberGoodMarks: ++this.state.lecture.numberGoodMarks
            })
        }
        if(e.target.id === "satisfactory_mark"){
                this.setState({
                    numberSatisfactoryMarks: ++this.state.lecture.numberSatisfactoryMarks
                })
        }
        if(e.target.id === "bad_mark") {
                this.setState({
                    numberBadMarks: ++this.state.lecture.numberBadMarks
                })
            }
        localStorage.setItem(this.state.lecture.idLecture, uuid())
        this.setState({
            isVoted: true
        })
        firebase.database().ref('lectures/' + this.state.lecture.idLecture).set(this.state.lecture);
        
        
    };

    componentDidMount(){
        // firebase.database().ref('lectures/' + idLecture).once('value', (data)=>{
        //     this.setState({
        //         lecture: data.val()
        //     })  
        // })
        localStorage.clear();
    }

    render(){
        
        return(
            <div className = {styles.evaluation_lecture__form}>
                {
                // this.state.isVoted ? <h1>Спасибо за голосование!</h1>: 
                <>
                    <h1 className = {styles.evaluation_lecture__name}>{this.state.lecture.nameLecture}</h1>
                    
                    <div className = {styles.evaluation_lecture__buttons}>
                        <button id = "good_mark" className = {styles.button + " " + styles.good_mark}   onClick = {this.btnClick}></button>

                        <button id = "satisfactory_mark" className = {styles.button + " " + styles.satisfactory_mark} onClick = {this.btnClick}></button>

                        <button id = "bad_mark" className = {styles.button + " " + styles.bad_mark} onClick = {this.btnClick}></button>
                    </div>

                    <h2>Statistics</h2>
                    <ul className = {styles.evaluation_lecture__statistics}>
                        <li className = "">
                            <img src = {good_mark} style = {{wight: "50px", height: "50px"}}></img>
                            <span>{this.state.lecture.numberGoodMarks}</span>
                        </li>

                        <li className = "">
                            <img src = {satisfactory_mark} style = {{wight: "50px", height: "50px"}}></img>
                            <span>{this.state.lecture.numberSatisfactoryMarks}</span>
                        </li>

                        <li className = "">
                            <img src = {bad_mark} style = {{wight: "50px", height: "50px"}}></img>
                            <span>{this.state.lecture.numberBadMarks}</span>
                        </li>
                    </ul>
                </>
                }
            </div>
        )
    }
}

export default EvaluationLecture;