import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

class NavBar extends Component {
    render() {
        return (
            <View style={styles.navBar}>
                <Text style={styles.navBarText}>더 보기22</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    navBar: {
        height: 60,
        backgroundColor: '#ff6e40',
        justifyContent: 'center',
        alignItems: 'center'
    },
    navBarText: {
        fontSize: 20,
        color: 'white'
    }
});

export default NavBar;
