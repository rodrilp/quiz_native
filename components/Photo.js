import React, { Component } from 'react'
import { Image, View } from 'react-native'
import imagen from '../assets/no-foto.png'

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
                    <Image className = "foto" source={{uri: imagen}} alt='No existe foto'/>
                </View>
            )
        }
    }
}
