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
                <View style = {styles.author}>
                    <Author question = {this.props.question}/>
                </View>
                <View style = {styles.question}>
                    <View style = {styles.photo}>
                        <Photo question = {this.props.question}/> 
                    </View>  
                    <View style = {styles.content}>
                        <Question question = {this.props.question}
                                currentQuestion = {this.props.currentQuestion}/>
                        <Answer question = {this.props.question}
                                onQuestionAnswer1 = {(next) => this.props.onQuestionAnswer(next)}/>
                    </View>
                    
                </View>
                <View style = {styles.tips}>
                    <Tips question = {this.props.question}/> 
                </View>       
            </View>
        )
    }
}

const styles = StyleSheet.create({
    game: {
      flex:1,
      flexDirection: 'column',
    },
    author : {
        flex: 1
    },
    question: {
        flex: 6,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center'
    },
    tips: {
        flex:2,
        flexDirection: 'column'
    },
    photo:{
        flex:1
    },
    content: {
        flex: 1,
        justifyContent: 'center'
    }
})