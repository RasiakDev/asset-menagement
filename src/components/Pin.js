import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import * as data from '../json/Data.json'

function Pin({ style, size = 44, color = 'black', ...otherProps }) {

    return (

        <Animated.View style={[styles.container, style]} {...otherProps}>
            <Entypo name="location-pin" size={size} color={color} />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute'
    }
})
export default Pin;