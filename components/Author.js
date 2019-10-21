import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class Author extends Component {
    render() {
        return (
            <View className = "Author">
                <Text> Created by {this.this.props.question.author.username}
                        <Image className="fotoCreador" src={this.props.question.author.photo.url} roundedCircle alt ="Avatar del creador de la pregunta"/>     
                </Text>
            </View>
        )
    }
}

