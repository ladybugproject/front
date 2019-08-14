import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

class LogoBox extends React.Component {
    render() {
        return (
            <View style={styles.box}>
                <Image style={styles.logo} source={require('../img/logo.png')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        width: '75%',
        height: 30,
        margin: 5,
        alignItems: 'center',
    },
    logo: {
        flex: 1,
        width: '100%',
        height: '100%',
    }
})

export default LogoBox;