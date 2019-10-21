import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Question extends Component {
    render() {
        return (
            <View className = "Question">
                <Text> Question {this.props.currentQuestion +1} </Text>
                <Text>{this.props.question.question}</Text>
            </View>
        )
    }
}

