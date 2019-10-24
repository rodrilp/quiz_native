import React, { Component } from 'react'
import { Image, View, StyleSheet} from 'react-native'

export default class Photo extends Component {
    render() {
        if(this.props.question.attachment !== null){
            return (
                <View>
                    <Image style={{width: 50, height: 50, alignSelf: "center"}} source = {{uri: this.props.question.attachment.url}} alt = "Foto del Quiz"/>
                </View>
            )
        }else{
            return(
                <View>
                    <Image style={{width: 50, height: 50}} source={require('../assets/no-foto.png')} alt='No existe foto'/>
                </View>
            )
        }
    }
}


const styles = StyleSheet.create({
    photo:{
        width: 50,
        height: 50
    }
})