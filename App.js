import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { AppRegistry } from 'react-native';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import ButtonContainer from './containers/ButtonContainer';
import thunkMiddleware from 'redux-thunk';
import InfoPanelContainer from './containers/InfoPanelContainer';

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

export default class App extends React.Component {
    
    render() {
        
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <StatusBar barStyle="light-content" />
                    
                    <View style={styles.infoPanelContainer}>
                        <InfoPanelContainer />
                    </View>
                    <View style={styles.buttons}>
                        <ButtonContainer />
                    </View>
                </View>
            </Provider>
            );
        }
}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#050f3b',
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoPanelContainer: {
        alignItems: 'center',
        width: '100%',
        position: 'absolute',
        top: 50
    },
    buttons: {
        width: '100%',
        padding: 30
    },
});
    
if (Platform.OS === 'web') {
    AppRegistry.registerComponent('App', () => App)
    AppRegistry.runApplication('App', {
        initialProps: {},
        rootTag: document.getElementById('root'),
    })
}
