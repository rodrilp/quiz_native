import React, { Component } from 'react'
import { Image, View } from 'react-native'
import imagen from '../attachments/no-foto.png'

export default class Photo extends Component {
    render() {
        if(this.props.question.attachment !== null){
            return (
                <View className = "Photo">
                    <Image src = {this.props.question.attachment.url} alt = "Foto del Quiz"/>
                </View>
            )
        }else{
            return(
                <View className = "Nphoto">
                    <Image className = "foto" src={imagen} alt='No existe foto'/>
                </View>
            )
        }
    }
}
