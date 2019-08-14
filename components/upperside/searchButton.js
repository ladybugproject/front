import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

class SearchButton extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.home}>
                <Text style={{alignSelf:'center'}}>Search</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    home:{
        width: 100,
        height: 20,
        backgroundColor: '#d3d3d3',
        margin: 5,
    }
})

export default SearchButton;