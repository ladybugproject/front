import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

class ImageBox extends React.Component {
    render() {
        return (
            <View style={{width:this.props.w, height:this.props.h, marginHorizontal: 5}}>
                <Image
                source={this.props.imageSrc}
                style={{width:'100%', height:'100%'}}/>
            </View>
        )
    }
}


export default ImageBox;