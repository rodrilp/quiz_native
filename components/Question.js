import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Question extends Component {
    render() {
        return (
            <View style = {styles.question}>
                <Text style = {styles.titulo}> Question {this.props.currentQuestion +1} </Text>
                <Text style = {styles.pregunta}>{this.props.question.question}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    question : {
        flex: 1,
        alignItems:'center'
    },
    titulo : {
        marginBottom: 10,
        fontSize: 20,
        textDecorationLine: 'underline'
    },
    pregunta: {
        fontSize: 25
    }
})
