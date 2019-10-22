import React, { Component } from 'react'
import { Text, View, FlatList} from 'react-native'

export default class Tips extends Component {
    render() {
        var list;
        if (this.props.question.tips.length === 0) {
            list = "No tips for this quiz";
        }else{
            list = this.props.question.tips.map((tip, index) => 
                <FlatList key={index}>{tip}</FlatList>            
            );
        }
        return (
            <View>
                <Text> Tips </Text>
                <Text>{list}</Text>
            </View>
        )
    }
}
