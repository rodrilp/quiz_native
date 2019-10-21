import React, { Component } from 'react'
import { View, Button } from 'react-native'

export default class Buttons extends Component {
    render() {
        return (
            <View>
                <Button onClick = {()=> this.props.onSubmit()}
                        disabled = {this.props.currentQuestion !== (this.props.length -1)}>Submit
                </Button>
                <Button onClick = {()=> this.props.onChangequestion(false)}
                        disabled = {this.props.currentQuestion === 0}>Previous
                </Button>
                <Button onClick = {()=> this.props.onChangequestion(true)}
                        disabled = {this.props.currentQuestion === (this.props.length -1)}>Next
                </Button>
                <Button onClick = {()=> this.props.onReset()}>Reset
                </Button>
            </View>
        )
    }
}
