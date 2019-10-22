import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class Mark extends Component {
    render() {
        return (
            <View>
                <Text> Has acertado {this.props.score} preguntas! </Text>
                <Button variant="success"
                        onPress = {()=> this.props.onReset()}
                        title = "Play Again">
                </Button>
            </View>
        )
    }
}
