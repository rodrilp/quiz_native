import React, { Component } from 'react';
import { connect } from 'react-redux';
import Game from './Game';
import Botonera from './Buttons';
import Mark from './Mark';
import ButtonsSave from './Buttons2';
import { View, Text, StyleSheet, Button, AsyncStorage} from 'react-native';
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
          <View style = {styles.gameScreen}>
            <View style = {styles.navBar}>
              <Text style = {styles.text}>QUIZ GAME</Text>
              <Button title= "Volver a Inicio"
                      onPress = {() => this.props.navigation.navigate('InitialScreen')}
              />
            </View>
            <View style = {styles.game}>
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
              <ButtonsSave  onSave = {() => AsyncStorage.setItem('@P2_2019_IWEB:quiz',JSON.stringify(this.props.questions))
                                              .then(() => {
                                                alert("Los Quizzes han sido guardados!");
                                              })
                                              .catch(() => {
                                                alert("Error al guardar los Quizzes!");
                                              })}
                            onLoad = {() => AsyncStorage.getItem('@P2_2019_IWEB:quiz')
                                              .then((questions) => {
                                                return parsedQuestions = JSON.parse(questions);                                                
                                              })                                                                    
                                              .then((quizzes) => {
                                                if (quizzes.length > 0) {
                                                  alert("Los Quizzes han sido cargados!");
                                                  this.props.dispatch(initQuestion(quizzes))
                                                }else{
                                                  alert("No hay Quizzes que cargar!");
                                                }
                                              })
                                              .catch((e) => {
                                                alert("Error cargando los Quizzes!");
                                                console.log(e)
                                              })}
                            onRemove = {() => AsyncStorage.clear()
                                                .then(() => {
                                                  alert("Los Quizzes han sido borrados!");
                                                })
                                                .catch(() => {
                                                  alert("Error al eliminar los Quizzes!");
                                                })}
              />
            </View>
            
          </View>
        )
      }else {
        return (
          <View>
            <View>
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


const styles = StyleSheet.create({
  gameScreen: {
    flex:1,
    flexDirection: 'column',
    marginTop: 32,
    backgroundColor: '#FFA89A'
  },
  navBar: {
    flex:1,
    flexDirection: "column",
    justifyContent: 'space-around',
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#BDBDBD'
  },
  game : {
    flex:10,
    flexDirection: 'column'
  },
  text:{
    fontSize: 35,
    alignSelf: 'center'
  }

});

function mapStateToProps(state) {
  return {
  ...state
  };
}

export default connect(mapStateToProps)(GameScreen);