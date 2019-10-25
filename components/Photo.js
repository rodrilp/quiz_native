import React, { Component } from 'react'
import { Image, View, StyleSheet} from 'react-native'

export default class Photo extends Component {
    render() {
        if(this.props.question.attachment !== null){
            return (
                <View style = {styles.photo}>
                    <Image style = {styles.imagen} source = {{uri: this.props.question.attachment.url}} alt = "Foto del Quiz"/>
                </View>
            )
        }else{
            return(
                <View style = {styles.photo}>
                    <Image style = {styles.imagen} source={require('../assets/no-foto.png')} alt='No existe foto'/>
                </View>
            )
        }
    }
}


const styles = StyleSheet.create({
    photo : {
        flex: 1,
        justifyContent:'flex-start'
    },
    imagen:{
        width: 350,
        height: 175
    }
})