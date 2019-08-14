import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ImageBox from '../imageBox.js';

class MustSeeItem extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 20, marginLeft:10, marginTop: 5}}>오머나! 이건 꼭 봐야해!</Text>
                <View style={styles.contents}>
                    <ImageBox w={150} h={200} imageSrc={require('../../img/sample2.jpg')}/>
                    <View style={styles.info}>
                        <Text style={{fontSize: 20}}>옥탑방 고양이</Text>
                        <Text>내 곁에 있는 사람이 특별해지는 순간!</Text>
                        <Text>장소: 대학로틴틴홀</Text>
                        <Text>날짜: 2019.01.01~2019.12.31</Text>
                        <Text>출연진: 이윤제, 설윤아, 박상윤, 안설아...</Text>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#e5e3e3',
        marginTop: 5,
        marginBottom: 5,
    },
    contents: {
        flexDirection: 'row',
        margin: 5,
    },
    info: {
        marginHorizontal: 5,
        width: 220,
        height: 160,
    }
})

export default MustSeeItem;