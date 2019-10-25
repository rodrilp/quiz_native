import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

export default class Answer extends Component {
    render() {
        return (
            <View style = {styles.answer}>
                <TextInput  style = {styles.text} 
                            value = {this.props.question.userAnswer || ''}
                            placeholder = 'Introduce your answer'
                            title = "Respuesta"
                            onChangeText = { (next) => {this.props.onQuestionAnswer1(next)}}/> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    answer : {
        flex: 1,
        justifyContent:'center',
        alignSelf: 'center',
    },
    text: {
        fontSize: 25,
        borderRadius: 4,
        borderWidth: 0.5,
        backgroundColor: '#E6E6E6'
    }
})
