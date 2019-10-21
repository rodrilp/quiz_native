import React, { Component } from 'react';
import { connect } from 'react-redux';
import Game from './Game';
import Botonera from './Buttons';
import Mark from './Mark';
import {questionAnswer,changeQuestion,submit, initQuestion, reset} from '../redux/actions'

export class GameScreen extends Component {

  loadQuizzes(){
    fetch('https://quiz.dit.upm.es/api/quizzes/random10wa?token=32403b83b30b3e467e6c')
    .then((response) =>{
      return response.json();
    })
    .then((data) => this.props.dispatch(initQuestion(data)))
  }
  componentDidMount(){
    this.loadQuizzes();
  }

  render() {
    //console.log(this.props);
    console.log(this.props.questions)
    if(!this.props.finished){
      return (
        <div className = 'App'>
          <div className = 'Navbar'>
            <h1>QUIZ GAME</h1>
          </div>
          <Game question = {this.props.questions[this.props.currentQuestion]}
                currentQuestion = {this.props.currentQuestion}
                onQuestionAnswer={(answer) => {
                  this.props.dispatch(questionAnswer(this.props.currentQuestion, answer));
                }}
          />
          <Botonera question = {this.props.questions[this.props.currentQuestion]}
                    currentQuestion = {this.props.currentQuestion}
                    length = {this.props.questions.length}
                    finished = {this.props.finished}
                    onChangequestion = {(next) =>this.props.dispatch(changeQuestion(next))}
                    onSubmit = {() => this.props.dispatch(submit(this.props.questions))}
                    onReset = {() => {
                      this.loadQuizzes()
                      this.props.dispatch(reset())}}
          />
        </div>
      )
    }else {
      console.log(this.props.finished)
      return (
        <div className = 'App'>
          <div className = 'Navbar'>
            <h1>QUIZ GAME</h1>
          </div>
        <Mark score = {this.props.score}/>
        </div>
        
      )
    }
  }
}


function mapStateToProps(state) {
  return {
  ...state
  };
}

export default connect(mapStateToProps)(GameScreen);