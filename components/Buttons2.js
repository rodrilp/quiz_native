import React, { Component } from 'react'
import { View, TouchableHighlight, Text, StyleSheet} from 'react-native'

export default class Buttons extends Component {
    render() {
        return (
            <View style = {styles.buttons} >
                <View>
                    <TouchableHighlight onPress = {()=> this.props.onSave()}
                            style = {styles.boton}>
                        <Text style = {styles.text}>Save</Text>
                    </TouchableHighlight>
                </View>
                
                <View>
                    <TouchableHighlight onPress = {()=> this.props.onLoad()}
                                        style = {styles.boton}>
                        <Text style = {styles.text}>Load</Text>
                    </TouchableHighlight>
                </View>

                <View>
                    <TouchableHighlight onPress = {()=> this.props.onRemove()}
                                        style = {styles.boton}>
                        <Text style = {styles.text}>Remove</Text>
                    </TouchableHighlight>
                </View>                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttons : {
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignSelf: 'center',
        marginBottom: 10
    },
    boton: {
        width:90,
        height:35,
        marginBottom: 30,
        marginRight:10,
        borderRadius: 4,
        borderWidth: 0.5,
        backgroundColor: '#BEFFD6'
    },
    text: {
        fontSize:22,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center'
    }
})

