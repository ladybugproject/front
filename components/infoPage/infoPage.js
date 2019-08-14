import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ImageBox from '../imageBox.js'

class Info extends React.Component {
    render() {
        return (
            <View styles={styles.container}>
                <View style={styles.box1}>
                    <View style={{width:'55%'}}>
                        <Text style={{fontSize:20}}>작업의 정석</Text>
                        <Text>작업의 정석</Text>
                        <Text>정석중의 정석</Text>
                    </View>
                    <ImageBox w={150} h={200} imageSrc={require('../../img/sample3.jpg')}/>
                </View>
                <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginVertical:3}}/>
                <View>
                    <Text style={{fontSize:20}}>시놉시스</Text>
                    <Text>줄거리</Text>
                </View>
                <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginVertical:3}}/>
                <View>
                    <Text style={{fontSize:20}}>대표 출연진</Text>
                    <View style={styles.actor}>
                        <ImageBox w={120} h={150} imageSrc={require('../../img/actor1.gif')}/>
                        <ImageBox w={120} h={150} imageSrc={require('../../img/actor2.gif')}/>
                        <ImageBox w={120} h={150} imageSrc={require('../../img/actor3.gif')}/>
                        <ImageBox w={120} h={150} imageSrc={require('../../img/actor4.gif')}/>
                    </View>
                </View>
                <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginVertical:3}}/>
                <View>
                    <Text style={{fontSize:20}}>평점</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {

    },
    box1: {
        flexDirection: 'row',
        padding: 5,
    },
    box2: {

    },
    box3: {

    },
    box4: {

    },
    actor: {
        flexDirection: 'row'
    }


})


export default Info;