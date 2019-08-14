import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

class MenuBox extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.box}>
                <Image style={styles.menu} source={require('../../img/menu.png')} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        width: 30,
        height: 30,
        margin: 5,

    },
    menu: {
        flex: 1,
        width: '100%',
        height: '100%',
    }
})

export default MenuBox;