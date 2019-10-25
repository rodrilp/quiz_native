import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default class Author extends Component {
    render() {
        return (
            <View style = {styles.author}>
                <Text style = { styles.text}> Created by {this.props.question.author.username}     
                </Text>
                <Image style={styles.photo} source={{uri:this.props.question.author.photo.url}} alt ="Avatar del creador de la pregunta"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    author: {
        marginTop:15,
        flexDirection: 'row',
        alignSelf: 'flex-end'
    },
    text: {
        marginRight: 5
    },
    photo: {
        width:20,
        height:20
    }
})

