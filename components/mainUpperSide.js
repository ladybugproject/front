import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    upperSide: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    downSide: {
        flex: 3,
        backgroundColor: 'black'
    }
      
  });


class main_upperside extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.upperSide}>
                    <Text>오머나</Text>
                </View>
                <View style={styles.downSide} />
            </View>
        )
    }
}


  
export default main_upperside;