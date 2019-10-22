import React, { Component } from 'react'
import { Image, View } from 'react-native'

export default class Photo extends Component {
    render() {
        if(this.props.question.attachment !== null){
            return (
                <View className = "Photo">
                    <Image source = {{uri: this.props.question.attachment.url}} alt = "Foto del Quiz"/>
                </View>
            )
        }else{
            return(
                <View className = "Nphoto">
                    <Image className = "foto" source={require('../assets/no-foto.png')} alt='No existe foto'/>
                </View>
            )
        }
    }
}
