import React, { Component } from 'react';
import { connect } from 'react-redux';
import Game from './Game';
import Botonera from './Buttons';
import Mark from './Mark';
import { View, Text} from 'react-native';
import {questionAnswer,changeQuestion,submit, initQuestion, reset} from '../redux/actions'

class GameScreen extends Component {

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
    if(this.props.questions.length > 0){
      console.log(this.props.questions[0])
      if(!this.props.finished){
        return (
          <View className = 'App'>
            <View className = 'Navbar'>
              <Text>QUIZ GAME</Text>
            </View>
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
          </View>
        )
      }else {
        return (
          <View className = 'App'>
            <View className = 'Navbar'>
              <Text>QUIZ GAME</Text>
            </View>
          <Mark score = {this.props.score}
                onReset = {() => {
                  this.loadQuizzes()
                  this.props.dispatch(reset())}}/>
          </View>
          
        )
      }

    }else{
      return(
        <View>
          <Text>Cargando Preguntas...</Text>
        </View>
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