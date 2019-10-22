import React, { Component } from 'react'
import { View, Button, Text } from 'react-native'

export default class Buttons extends Component {
    render() {
        return (
            <View>
                <Button onPress = {()=> this.props.onSubmit()}
                        disabled = {this.props.currentQuestion !== (this.props.length -1)}
                        title = "Submit">
                </Button>
                <Button onPress = {()=> this.props.onChangequestion(false)}
                        disabled = {this.props.currentQuestion === 0}
                        title = "Previous">
                </Button>
                <Button onPress = {()=> this.props.onChangequestion(true)}
                        disabled = {this.props.currentQuestion === (this.props.length -1)}
                        title = "Next">

                </Button>
                <Button onPress = {()=> this.props.onReset()}
                        title = "Reset">
                </Button>
            </View>
        )
    }
}
