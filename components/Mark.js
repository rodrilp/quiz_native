import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class Mark extends Component {
    render() {
        return (
            <View>
                <Text> Has acertado {this.props.score} preguntas! </Text>
                <Button variant="success"
                        onClick = {()=> this.props.onReset()}>Play Again
                </Button>
            </View>
        )
    }
}
