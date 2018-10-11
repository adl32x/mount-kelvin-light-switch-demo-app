import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import React from 'react';

class InfoPanel extends React.Component {
    componentDidMount () {
        this.props.loadRoom()
    }
    render () {
        if (this.props.roomName === '') {
            return (
                <View styles={styles.container}>
                    <ActivityIndicator color="#fff" />
                </View>
            )
        } else {
            return (
                <View styles={styles.container}>
                    <Text style={styles.roomName}>{this.props.roomName}</Text>
                    <Text style={styles.roomTitle}>Hotel Mount Kelvin</Text>
                </View>
            )
        }


    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    roomName: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
    },
    roomTitle: {
        color: '#fff',
        textAlign: 'center',
    }
});

export default InfoPanel;