import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

class SetupBox extends React.Component {
    render() {
        return (
            <View style={styles.box}>
                <Image style={styles.setup} source={require('../img/setup.png')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        width: 30,
        height: 30,
        margin: 5,
    },
    setup: {
        width: '100%',
        height: '100%',
    }
})

export default SetupBox;