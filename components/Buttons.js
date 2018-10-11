import { StyleSheet, View } from 'react-native';
import React from 'react';
import Button from './Button';

class Buttons extends React.Component {

    render () {
        return (
            <View style={styles.lightSwitchContainer}>
                <Button icon="●" text="ALL ON" action={this.props.lightsOn}></Button>
                <Button icon="○" text="ALL OFF" action={this.props.lightsOff}></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    lightSwitchContainer: {
        flexDirection: 'row',
    },
});

export default Buttons;