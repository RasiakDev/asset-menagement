import React, { useRef, useEffect, useState } from 'react';
import { Animated, Button, PanResponder, StyleSheet, Text, View, } from 'react-native';
import Pin from './Pin';
import AppButton from './AppButton';



function PinMover({ xValue, yValue }) {

    const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value
                });
            },
            onPanResponderMove: Animated.event(
                [
                    null,
                    { dx: pan.x, dy: pan.y },


                ],

                { useNativeDriver: false }

            ),
            onPanResponderRelease: () => {
                pan.flattenOffset();
                dataToParent();

            },

        })
    ).current;

    const dataToParent = () => {

        // functionFromParent({x, y});
        xValue({ x });
        yValue({ y });
    }
    const x = pan.x;
    const y = pan.y

    return (
        <Pin

            style={[pan.getLayout(), styles.box]}
            size={44}
            color="#2ab7ca"
            {...panResponder.panHandlers}
        >
            {/* <Pin style={styles.pin} /> */}


        </Pin>

        // {buttonValue == true && (<AppButton width={'30%'} style={styles.button} title="Save" onPress={dataToParent} />)}



    );
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: "bold"
    },
    box: {

    }
});
export default PinMover;