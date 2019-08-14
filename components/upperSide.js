import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import MenuBox from './menuBox.js';
import SetupBox from './setupBox.js';
import LogoBox from './logoBox.js';
import HomeButton from './homeButton.js';
import SearchButton from './searchButton.js';


const styles = StyleSheet.create({
    container: {
        flex: 0.7,
        width: '100%',
    },
    upperSide: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 20,
        marginLeft: 5,
        marginRight: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    downSide: {
        flex: 1,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    }
  });

  class UpperSide extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.upperSide}>
                    <MenuBox/>
                    <LogoBox/>
                    <SetupBox/>
                </View>
                <View style={styles.downSide}>
                    <HomeButton/>
                    <SearchButton/>
                </View>
            </View>
        )
    }
}

export default UpperSide;
