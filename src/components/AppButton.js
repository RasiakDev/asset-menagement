import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

function AppButton({ title, onPress, style, width = '100%', height = 60, ...otherProps }) {

    return (

        <TouchableWithoutFeedback onPress={onPress}  {...otherProps}>
            <View style={[styles.container, style, { width: width, height: height }]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(190, 190, 190, 0.6)',
        borderWidth: 1,
        borderColor: 'rgba(160, 160, 160, 0.6)',
        borderRadius: 6,
        // width: '30%',
        // height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        // position: 'absolute',
        // bottom: 5,
        // left: '35%',

    },
    title: {
        fontSize: 20
    }
})
export default AppButton;