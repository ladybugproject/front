import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import UpperSide from './upperSide.js'


const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 5,
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
        flex: 3,
        backgroundColor: '#dd7e7e'
    },
  });


class Main extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <UpperSide/>
                <View style={{borderBottomColor: 'black', borderBottomWidth: 1,}}/>
                <View style={styles.downSide} />
            </View>
        )
    }
}


  
export default Main;