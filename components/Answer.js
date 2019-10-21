import React, { Component } from 'react'
import { View, TextInput } from 'react-native'

export default class Answer extends Component {
    render() {
        return (
            <View className = "Answer">
                <TextInput 
                            value = {this.props.question.userAnswer || ''}
                            placeholder = 'Introduzca su respuesta'
                            title = "Respuesta"
                            onChangeText = { (next) => {this.props.onQuestionAnswer1(next.target.value)}}/> 
            </View>
        )
    }
}
