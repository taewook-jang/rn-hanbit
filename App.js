import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import User from './components/User';
import NavBar from './components/NavBar';
import ButtonGroup  from './components/ButtonGroup';
import Tabs from './components/Tabs';

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <NavBar />
                <User />
                <View style={{height: 40}}></View>
                <ButtonGroup />
                <View style={{flex: 1}}></View>
                <Tabs />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
});

export default App;
