import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import User from './components/User';
import NavBar from './components/NavBar';

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <NavBar />
                <User></User>
                <View style={{height: 40}}></View>
                <ButtonGroup></ButtonGroup>
                <View style={{flex: 1}}></View>
                <Tabs></Tabs>
            </View>
        );
    }
}

class ButtonGroup extends Component {
    render() {
        return (
            <View style={styles.buttonGroup}>
                <Text>123</Text>
            </View>
        )
    }
}

class Tabs extends Component {
    render() {
        return (
            <View style={styles.tabs}>
                <Text>123</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    buttonGroup: {
        height: 200,
        backgroundColor: '#c5e1a5'
    },
    tabs: {
        height: 100,
        backgroundColor: '#ffd54f'
    }
});

export default App;
