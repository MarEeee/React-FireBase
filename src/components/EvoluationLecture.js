import React from 'react'

import good_mark from '../img/iconsForRating/good_mark.jpg'
import satisfactory_mark from '../img/iconsForRating/satisfactory_mark.jpg'
import bad_mark from '../img/iconsForRating/bad_mark.png'

import styles from "./EvaluationLecture.module.css"


const testData = {
    idLecture: "fsdf3124",
    nameLecture: "Basic React",
    numberGoodMarks: 9,
    numberSatisfactoryMarks: 32,
    numberBadMarks: 6
}

class EvaluationLecture extends React.Component{
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleSubmit = e => {
        e.preventDefault();
        console.log(e)
    };

    render(){
        return(
            <div className = {styles.evaluation_lecture__form}>
                <h1 className = {styles.evaluation_lecture__name}>{testData.nameLecture}</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className = {styles.evaluation_lecture__buttons}>
                    
                    
                    <button className = {styles.button} type="submit" className="submitBtn" value = {1}>
                        <img src = {good_mark} className = {styles.img}></img>
                    </button>
                        
                        <button className = {styles.button}  type="submit" className="submitBtn">
                            <img src = {satisfactory_mark} className = {styles.img}></img>
                        </button>
                        <button className = {styles.button}  type="submit" className="submitBtn">
                            <img src = {bad_mark} className = {styles.img}></img>
                        </button>
                    </div>
                </form>
                
               


                <h2>Statistics</h2>
                <ul className = {styles.evaluation_lecture__statistics}>
                    <li className = "">
                        <img src = {good_mark} style = {{wight: "50px", height: "50px"}}></img>
                        <span>{testData.numberGoodMarks}</span>
                    </li>

                    <li className = "">
                        <img src = {satisfactory_mark} style = {{wight: "50px", height: "50px"}}></img>
                        <span>{testData.numberSatisfactoryMarks}</span>
                    </li>

                    <li className = "">
                        <img src = {bad_mark} style = {{wight: "50px", height: "50px"}}></img>
                        <span>{testData.numberBadMarks}</span>
                    </li>
                </ul>
                
            </div>
        )
    }
}

export default EvaluationLecture;