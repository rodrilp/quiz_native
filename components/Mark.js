import React, { Component } from 'react'
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native'

export default class Mark extends Component {
    render() {
        return (
            <View style= {styles.mark}>
                <View>
                    <Text style = {styles.text}> Has acertado {this.props.score} preguntas! </Text>
                </View>
                <View>
                    <TouchableHighlight 
                        onPress = {()=> this.props.onReset()}
                        style = {styles.boton}>
                        <Text style = {styles.texto}>Play again</Text>
                    </TouchableHighlight>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mark:{
        flex:1,
        justifyContent:'space-around'
    },
    boton: {
        alignSelf:'center',
        width:200,
        height:35,
        marginBottom: 30,
        marginRight:10,
        borderRadius: 4,
        borderWidth: 0.5,
        backgroundColor: '#BDBDBD'
    },
    texto: {
        fontSize:22,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    text :{
        fontSize: 30
    }
})
