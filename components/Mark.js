import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

export default class Mark extends Component {
    render() {
        return (
            <View>
                <Text> Has acertado {this.props.score} preguntas! </Text>
                <TouchableHighlight 
                    onPress = {()=> this.props.onReset()}
                >
                    <Text>Play again</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
