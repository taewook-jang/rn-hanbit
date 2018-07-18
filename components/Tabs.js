import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

class Tabs extends Component {
    render() {
        return (
            <View style={styles.tabs}>
                <TabButton name='홈' />
                <TabButton name='시간표' />
                <TabButton name='커뮤니티' />
                <TabButton name='모임' />
                <TabButton name='더보기' />
            </View>
        )
    }
}

class TabButton extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{height: 30, width: 30, backgroundColor: 'gray'}}></View>
                <Text style={{marginTop: 5, color: '#a0a0a0'}}>{this.props.name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabs: {
        height: 60,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderColor: '#a0a0a0'
    }
});

export default Tabs;
