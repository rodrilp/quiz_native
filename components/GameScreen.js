import React, { Component } from 'react';
import { connect } from 'react-redux';
import Game from './Game';
import Botonera from './Buttons';
import Mark from './Mark';
import ButtonsSave from './Buttons2';
import { View, Text, StyleSheet, Button, AsyncStorage,TouchableHighlight} from 'react-native';
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
              <TouchableHighlight onPress = {() => this.props.navigation.navigate('InitialScreen')}
                                  style = {styles.boton1}>
                <Text style = {styles.text1}>Volver a Inicio</Text>
              </TouchableHighlight>
            </View>
            <View style = {styles.game}>
              <View style = {styles.question}>
                <Game question = {this.props.questions[this.props.currentQuestion]}
                      currentQuestion = {this.props.currentQuestion}
                      onQuestionAnswer={(answer) => {
                        this.props.dispatch(questionAnswer(this.props.currentQuestion, answer));
                      }}
                />
              </View>
              <View style = {styles.button}>
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
            
          </View>
        )
      }else {
        return (
          <View style = {styles.gameScreen}>
            <View style = {styles.navBar}>
              <Text style = {styles.text}>QUIZ GAME</Text>
                <TouchableHighlight onPress = {() => this.props.navigation.navigate('InitialScreen')}
                                    style = {styles.boton1}>
                  <Text style = {styles.text1}>Volver a Inicio</Text>
                </TouchableHighlight>
            </View>
            <View style = {styles.mark}>
              <Mark score = {this.props.score}
                onReset = {() => {
                  this.loadQuizzes()
                  this.props.dispatch(reset())}}/>
             </View>     
          </View>
        )
      }

    }else{
      return(
        <View style= {styles.load}>
          <Text style = {styles.text2}>Cargando Preguntas...</Text>
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
    flexDirection: "row",
    justifyContent: 'space-around',
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#BDBDBD'
  },
  game : {
    flex:15,
    flexDirection: 'column'
  },
  text:{
    fontSize: 35,
    alignSelf: 'center'
  },
  question:{
    flex:4
  },
  button:{
    flex:1
  },
  boton:{
    color: '#FFA89A'
  },
  boton1: {
    marginTop:10,
    backgroundColor: '#BDBDBD'
},
text1:{
  fontSize:20
},
mark : {
  flex:15,
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignSelf: 'center'
},
load:{
  flex:1,
  justifyContent: 'center',
  alignSelf:'center'
},
text2:{
  fontSize:30
}

});

function mapStateToProps(state) {
  return {
  ...state
  };
}

export default connect(mapStateToProps)(GameScreen);