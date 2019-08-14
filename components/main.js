import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import UpperSide from './upperside/upperSide.js'
import MustSeeItem from './mustSeeItem/mustSeeItem.js'
import NowShowingItem from './nowshowing/nowShowing.js'

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
  });


class Main extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <UpperSide/>
                <View style={{borderBottomColor: 'black', borderBottomWidth: 1,}}/>
                <MustSeeItem/>
                <NowShowingItem/>
            </View>
        )
    }
}


  
export default Main;