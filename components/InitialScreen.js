import React, { Component } from 'react'
import { StyleSheet, Button, View, Image} from 'react-native';


export default class InitialScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/fondo.png')} style={{width: 450, height: 253, alignSelf:'center', justifyContent:'center'}}/>
                    <View style={styles.buttContainer}>
                    <Button 
                            style={styles.button}
                            title= "Start Quiz"
                            onPress = {() => this.props.navigation.navigate('GameScreen')}
                    />
                    </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    buttContainer: {
        marginTop: 200,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 80,
    }
});