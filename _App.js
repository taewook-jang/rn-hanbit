/**
 * Sample React Native _App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class _App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!1
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js2
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
            </View>
        );
    }
}

export class Test extends Component {
    render() {
        return (
            <View style={styles.container}>
                <NaviBar />
                <Body />
            </View>
        )
    }
}

class NaviBar extends Component {
    render() {
        return (
            <View style={styles.naviBar}>
                <Text>
                    NaviBar2
                </Text>
            </View>
        )
    }
}

class Body extends Component {
    render() {
        return (
            <View style={styles.container2}>
                <View style={styles.left} />
                <View style={styles.right}>
                    <View style={styles.rightTop} />
                    <View style={styles.rightBottom} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    welcome: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10
    },
    left: {
        flex: 1,
        backgroundColor: 'red'
    },
    right: {
        flex: 1,
        flexDirection: 'row'
    },
    rightTop: {
        flex: 2,
        backgroundColor: 'blue'
    },
    rightBottom: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    naviBar: {
        height: 60,
        backgroundColor: 'green',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

