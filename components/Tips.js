import React, { Component } from 'react'
import { Text, View, FlatList} from 'react-native'


export default class Tips extends Component {
    render() {
        if (this.props.question.tips.length > 0) {
            return (
                <View>
                    <Text> Tips </Text>
                    <FlatList 
                        data = {this.props.question.tips}
                        renderItem={({item})=> <Text>{item}</Text> }
                        keyExtractor = {item => item}
                    />
                </View>
            )
        }else{
            return (
                <View>
                    <Text> Tips </Text>
                     
                    <Text>No tips for this quiz</Text> 
                    
                </View>
            )
        }
        
    }
}