import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import PropTypes from 'prop-types';

class UI extends Component {
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

UI.propTypes = {};

class NavBar extends Component {
    render() {
        return (
            <View style={styles.navBar}>
                <Text style={styles.navBarText}>더 보기</Text>
            </View>
        )
    }
}

class User extends Component {
    render() {
        return (
            <View style={styles.user}>
                <View style={{height: 150, flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{width: 100}}>
                        <View style={{width: 100, height: 100, backgroundColor: 'gray'}}>
                            <Image source={require('./img/avatar.png')} style={{width: 100, height: 100}}/>
                        </View>
                    </View>
                    <View style={{flex: 1, marginLeft: 10}}>
                        <Text style={{fontSize: 30}}>닉네임</Text>
                        <Text style={{fontSize: 15, color: 'gray'}}>이름</Text>
                        <Text style={{fontSize: 15, color: 'gray'}}>학교이름</Text>
                    </View>
                </View>
                <View style={{height: 50, flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: 1, height: 50, flexDirection: 'row', borderWidth: 0.5, borderRightWidth: 0, borderLeftWidth: 0, borderColor: 'gray',
                            alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={require('./img/list.png')} style={{width: 30, height: 25}}/>
                        <Text style={{marginLeft: 5}}>내가 쓴 글</Text>
                    </View>
                    <View style={{flex: 1, height: 50, flexDirection: 'row', borderWidth: 0.5, borderColor: 'gray', alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={require('./img/chat.png')} style={{width: 30, height: 25}}/>
                        <Text style={{marginLeft: 5}}>댓글 단 글</Text>
                    </View>
                    <View style={{flex: 1, height: 50, flexDirection: 'row', borderWidth: 0.5, borderColor: 'gray', borderRightWidth: 0, borderLeftWidth: 0,
                            alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={require('./img/star.png')} style={{width: 30, height: 25}}/>
                        <Text style={{marginLeft: 5}}>스크랩</Text>
                    </View>
                </View>
            </View>
        )
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
    navBar: {
        height: 60,
        backgroundColor: '#ff6e40',
        justifyContent: 'center',
        alignItems: 'center'
    },
    navBarText: {
        fontSize: 20,
        color: 'white'
    },
    user: {
        height: 200,
        backgroundColor: 'white'
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

export default UI;
