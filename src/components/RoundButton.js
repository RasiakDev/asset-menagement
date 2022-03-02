import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Feather } from '@expo/vector-icons';

function RoundButton({ iconColor, name, size = 38, backgroundColor = '#2ab7ca', style, onPress }) {

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container, { backgroundColor: backgroundColor }, style]}>
                <Feather name={name} size={size} color={iconColor} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 55,
        width: 55,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        // borderColor: '#f4f4f8',
        // // borderColor: '#4a4e4d',


    }
})
export default RoundButton;