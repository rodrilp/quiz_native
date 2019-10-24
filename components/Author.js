import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class Author extends Component {
    render() {
        return (
            <View >
                <Text style = {{alignItems: "baseline"}}> Created by {this.props.question.author.username}
                        <Image style={{width: 50, height: 50}} source={{uri:this.props.question.author.photo.url}} alt ="Avatar del creador de la pregunta"/>     
                </Text>
            </View>
        )
    }
}

