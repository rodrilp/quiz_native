import React, { Component } from 'react'
import Question from "./Question"
import Tips from "./Tips"
import { View} from 'react-native'


export default class Game extends Component {
    render() {
        let imagen = this.props.question.author.photo.url;
        return (
            <View className = "Game">
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
