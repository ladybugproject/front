import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ImageBox from '../imageBox.js';

class NowShowingItem extends React.Component {
    render() {
        return (
            <View>
                <View>
                    <Text style={{fontSize:20, marginHorizontal:5}}>Now Showing</Text>
                </View>
                <View style={styles.content}>
                    <ImageBox w={150} h={200} imageSrc={require('../../img/sample3.jpg')}/>
                    <ImageBox w={150} h={200} imageSrc={require('../../img/sample4.jpg')}/>
                    <ImageBox w={150} h={200} imageSrc={require('../../img/sample5.png')}/>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
    },
    content: {
        width: '100%',
        flexDirection: 'row',
    }
})

export default NowShowingItem;