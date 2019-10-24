import React, { Component } from 'react'
import Question from "./Question"
import Tips from "./Tips"
import { View, StyleSheet} from 'react-native'
import Author from './Author'
import Photo from './Photo'
import Answer from './Answer'



export default class Game extends Component {
    render() {
        return (
            <View style = {styles.game}>
                <Author question = {this.props.question}/>
                <Photo question = {this.props.question}/>
                <Question question = {this.props.question}
                          currentQuestion = {this.props.currentQuestion}/>
                <Answer question = {this.props.question}
                        onQuestionAnswer1 = {(next) => this.props.onQuestionAnswer(next)}/>
                <Tips question = {this.props.question}/>              
            </View>
        )
    }
}

const styles = StyleSheet.create({
    game: {
      flex:1,
      flexDirection: 'column',
      justifyContent: 'space-around'
    }
})