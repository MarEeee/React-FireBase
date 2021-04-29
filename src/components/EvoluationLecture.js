import React from 'react'

import good_mark from '../img/iconsForRating/good_mark.jpg'
import satisfactory_mark from '../img/iconsForRating/satisfactory_mark.jpg'
import bad_mark from '../img/iconsForRating/bad_mark.png'

import styles from "./EvaluationLecture.module.css"
import  firebase from 'firebase';
import uuid from 'react-uuid'

class EvaluationLecture extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            lecture:{  // объект который хранит информацию о лекции
                idLecture: "",
                nameLecture: "default value",
                numberGoodMarks: 0,
                numberSatisfactoryMarks: 0,
                numberBadMarks: 0
            },
            isLoading: false, // принимает значение true в тот момент когда данные с бд получены, в этот же момент начинает отрисовку
            isVoted: localStorage.getItem(this.props.idLecture) === null ? false : true, // введена для проверки в локальном хранилище пользователя id лекции.
        }                                                                                // Если она там есть -> пользователь уже голосовал -> отрисовывавем для него другой блок
      }

    btnClick = (e) => {
        if(e.target.id === "good_mark"){                              // проверка на то, какая из кнопок была нажата
            this.setState({                                           // обновляем состояние для numberGoodMarks и перерисовывем его. В данной реализации это не имеет смысла 
                numberGoodMarks: ++this.state.lecture.numberGoodMarks // т.к после нажатия на любую из кнопок с помощью условного рендеринга рисуем блок "Спасибо за голосование".                                           
            })                                                        // Решил оставить, дабы продемонстрировать работу с state
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
        localStorage.setItem(this.state.lecture.idLecture, uuid()) //добавляем в localStage информацию о том, что пользователь уже голосвал за лекцию с данным id
        this.setState({
            isVoted: true
        })
        firebase.database().ref('lectures/' + this.state.lecture.idLecture).set(this.state.lecture); // пушим обновления в бд
    };

    async componentDidMount(){
        this.setState({
            lecture:(await firebase.database().ref('lectures/' + this.props.idLecture).once('value')).val(), // Решил не добавлять проверку на то, существует ли лекцию в БД.
            isLoading: true
        }); 
    }

    render(){
        
        return(
            <div className = {styles.evaluation_lecture__form}>
                {!this.state.isLoading? null: 
                <>
                    
                    {this.state.isVoted ? <h1>Спасибо за голосование!</h1>: 
                    <>
                        <h1 className = {styles.evaluation_lecture__name}>{this.state.lecture.nameLecture}</h1>
                        <p className = {styles.evaluation_lecture__help_us}> Help us become better - rate the lecture!</p>
                        
                        <div className = {styles.evaluation_lecture__buttons}>
                            <button id = "good_mark" className = {styles.button + " " + styles.good_mark}   onClick = {this.btnClick}></button>

                            <button id = "satisfactory_mark" className = {styles.button + " " + styles.satisfactory_mark} onClick = {this.btnClick}></button>

                            <button id = "bad_mark" className = {styles.button + " " + styles.bad_mark} onClick = {this.btnClick}></button>
                        </div>
                    
                        <h2>Statistics</h2>

                        <ul className = {styles.evaluation_lecture__statistics}>
                            <li className = {styles.stat}>
                                <img src = {good_mark} style = {{wight: "50px", height: "50px"}} alt = "happy smile"></img>
                                <span className = {styles.statistics__value}>{this.state.lecture.numberGoodMarks}</span>
                            </li>

                            <li className = {styles.stat}>
                                <img src = {satisfactory_mark} style = {{wight: "50px", height: "50px"}} alt = "serious smile"></img>
                                <span className = {styles.statistics__value}>{this.state.lecture.numberSatisfactoryMarks}</span>
                            </li>

                            <li className = {styles.stat}>
                                <img src = {bad_mark} style = {{wight: "50px", height: "50px"}} alt = "sad smile"></img>
                                <span className = {styles.statistics__value}>{this.state.lecture.numberBadMarks}</span>
                            </li>
                        </ul>
                    </>
                    }
                </>
                }
            </div>
        )
    }
}

export default EvaluationLecture;
