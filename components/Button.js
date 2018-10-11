import { Animated, Easing, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import React from 'react';

const commonBounce = {
    duration: 150,
    easing: Easing.bounce,
    useNativeDriver: true,
}

class Button extends React.Component {
    constructor () {
        super()
        this.scaleValue = new Animated.Value(0)
    }

    press () {
        this.scaleValue.setValue(0)
        Animated.timing( this.scaleValue, { ...commonBounce, toValue: 1,})
            .start(() => {
                Animated.timing(this.scaleValue, { ...commonBounce, toValue: 0,}).start()
        })
        
        this.props.action()
    }

    render () {
        const scale = this.scaleValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 1.1]
        })
        
        return (
            <TouchableOpacity style={{
                flex: 1,
                margin: 7,
                height: 150,
                transform: [
                    {scaleX: scale},
                    {scaleY: scale},
                ]}}
                
                onPress={this.press.bind(this)}>
                <View style={styles.button}>
                    <Text style={styles.icon}>{this.props.icon}</Text>
                    <Text style={styles.buttonText}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    touchableOpacity: {
        flex: 1,
        margin: 7,
        height: 150,
        transform: [
            {scaleX: 1},
            {scaleY: 1},
        ]
    },
    button: {
        flex: 1,
        backgroundColor: '#131d46',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        marginBottom: 25,
        color: '#fff',
    },
    icon: {
        margin: -15,
        color: '#fff',
        fontSize: 100,
    }
});

export default Button;