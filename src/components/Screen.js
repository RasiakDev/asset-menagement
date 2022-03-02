import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

function Screen({ children, style }) {

    return (

        <SafeAreaView style={[styles.container], style}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight
    }
})
export default Screen;