import React, { Component } from 'react'
import { View, TouchableHighlight, Text, StyleSheet} from 'react-native'

export default class Buttons extends Component {
    render() {
        return (
            <View style = {styles.buttons} >
                <View>
                    <TouchableHighlight onPress = {()=> this.props.onSubmit()}
                            disabled = {this.props.currentQuestion !== (this.props.length -1)}
                            style = {styles.boton}>
                        <Text style = {styles.text}>Submit</Text>
                    </TouchableHighlight>
                </View>
                
                <View>
                    <TouchableHighlight onPress = {()=> this.props.onChangequestion(false)}
                            disabled = {this.props.currentQuestion === 0}
                            style = {styles.boton}>
                        <Text style = {styles.text}>Previous</Text>
                    </TouchableHighlight>
                </View>

                <View>
                    <TouchableHighlight onPress = {()=> this.props.onChangequestion(true)}
                            disabled = {this.props.currentQuestion === (this.props.length -1)}
                            style = {styles.boton}>
                        <Text style = {styles.text}>Next</Text>
                    </TouchableHighlight>
                </View>
                
                <View>
                    <TouchableHighlight onPress = {()=> this.props.onReset()}
                                        style = {styles.boton}>
                        <Text style = {styles.text}>Reset</Text>
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
        backgroundColor: '#BDBDBD'
    },
    text: {
        fontSize:22,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center'
    }
})
