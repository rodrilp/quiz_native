import React, { Component } from 'react'
import { View, TouchableHighlight, Text } from 'react-native'

export default class Buttons extends Component {
    render() {
        return (
            <View>
                <TouchableHighlight onPress = {()=> this.props.onSubmit()}
                        disabled = {this.props.currentQuestion !== (this.props.length -1)}>
                    <Text>Submit</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress = {()=> this.props.onChangequestion(false)}
                        disabled = {this.props.currentQuestion === 0}>
                    <Text>Previous</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress = {()=> this.props.onChangequestion(true)}
                        disabled = {this.props.currentQuestion === (this.props.length -1)}>
                    <Text>Next</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress = {()=> this.props.onReset()}>
                    <Text>Reset</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
