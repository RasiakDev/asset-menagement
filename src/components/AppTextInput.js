import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

function AppTextInput({ value, placeholder, iconName, style, borderRadius = 6, width = 300, ...otherProps }) {

    return (

        <View style={[styles.container, style, { width: width, borderRadius: borderRadius }]}>
            <TextInput style={styles.textInput} placeholder={placeholder} {...otherProps}></TextInput>
            {iconName && <Feather style={styles.icon} name={iconName} size={20} color="black" />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        height: 40,
        paddingLeft: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textInput: {
        width: '85%'
    },
    icon: {
        marginRight: 9
    }
})
export default AppTextInput;