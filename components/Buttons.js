import { Animated, Easing, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

class Buttons extends React.Component {

    constructor () {
        super()
        this.scaleValueOn = new Animated.Value(0)
        this.scaleValueOff = new Animated.Value(0)
    }

    on () {
        this.animate('scaleValueOn')
        this.props.lightsOn()
    }

    off() {
        this.animate('scaleValueOff')
        this.props.lightsOff()
    }

    animate (key) {
        this[key].setValue(0)
        Animated.timing(
          this[key],
          {
            toValue: 1,
            duration: 150,
            easing: Easing.bounce,
            useNativeDriver: true,
          }
        ).start(() => {
            Animated.timing(
                this[key],
                {
                  toValue: 0,
                  duration: 150,
                  easing: Easing.bounce,
                  useNativeDriver: true,
                }
              ).start(() => {})

        })
    }

    render () {
        const scale = this.scaleValueOn.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 1.1]
          })
        const scaleOff = this.scaleValueOff.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 1.1]
          })
        
        return (
            <View style={styles.lightSwitchContainer}>

                <TouchableOpacity style={{
                    flex: 1,
                    margin: 7,
                    height: 150,
                    transform: [
                        {scaleX: scale},
                        {scaleY: scale},
                    ]}}
                    
                    onPress={this.on.bind(this)}>
                    <View style={styles.button}>
                        <Text style={styles.icon}>●</Text>
                        <Text style={styles.buttonText}>ALL ON</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={{
                    flex: 1,
                    margin: 7,
                    height: 150,
                    transform: [
                        {scaleX: scaleOff},
                        {scaleY: scaleOff},
                    ]}}
                    
                    onPress={this.off.bind(this)}>
                    <View style={styles.button}>
                        <Text style={styles.icon}>○</Text>
                        <Text style={styles.buttonText}>ALL OFF</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    lightSwitchContainer: {
        flexDirection: 'row',
    },
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

export default Buttons;