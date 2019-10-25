import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet} from 'react-native'


export default class Tips extends Component {
    render() {
        if (this.props.question.tips.length > 0) {
            return (
                <View style = {styles.tips}>
                    <Text style = {styles.title}> Tips </Text>
                    <FlatList 
                        data = {this.props.question.tips}
                        renderItem={({item})=> <Text style = {styles.text}>{item}</Text> }
                        keyExtractor = {item => item}
                    />
                </View>
            )
        }else{
            return (
                <View style = {styles.tips}>
                    <Text style = {styles.title}> Tips </Text>
                     
                    <Text style = {styles.text}>No tips for this quiz</Text> 
                    
                </View>
            )
        }
        
    }
}

const styles = StyleSheet.create({
    tips : {
        flex: 1,
        justifyContent:'flex-start',
        alignSelf: 'center',
        
    },
    title: {
        backgroundColor: '#E6E6E6',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#E6E6E6',
        fontSize: 22,
        alignSelf:'center',
        marginBottom: 10
    },
    text: {
        fontSize: 16,
    }
})