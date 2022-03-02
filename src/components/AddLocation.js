import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Text } from 'react-native';
import PinMover from './PinMover';
import { Ionicons } from '@expo/vector-icons';
import AppTextInput from './AppTextInput';
import AppButton from './AppButton';
import { Formik } from 'formik';
import * as yup from 'yup';
import * as data from '../json/Data.json'
import RoundButton from './RoundButton';

function AddLocation({ updateMain }) {

    const [pinIndex, setPinIndex] = useState(false);
    const [visible, setVisible] = useState(false);

    const validation = yup.object().shape({
        assetName: yup.string().min(2, 'Too short').required('Asset Name is Required').max(19, 'Maximum 20 characters')
    })
    ///matches('/^[a-z\d\-_\s]+$/i')

    return (

        <>

            <Formik
                validationSchema={validation}
                initialValues={{ assetName: '', x: null, y: null, color: 'black', id: 5 }}
                onSubmit={(values) => {
                    data.locations.push(values);
                    setPinIndex(false);
                    updateMain({ data })
                }}
            >
                {({ handleSubmit, handleChange, errors, setFieldTouched, touched, setFieldValue }) => (
                    <>
                        <TouchableWithoutFeedback onPress={() => { setVisible(true); setFieldTouched() }}>
                            <Ionicons
                                style={styles.plusIcon}
                                name="add-outline"
                                size={43}
                                color="black" />
                        </TouchableWithoutFeedback>
                        {pinIndex && <TouchableWithoutFeedback onPressIn={() => { setPinIndex(false) }}>
                            <Ionicons
                                style={styles.closeIcon}
                                name="close-outline"
                                size={43}
                                color="black" />
                        </TouchableWithoutFeedback>}
                        {pinIndex && <PinMover
                            buttonValue={pinIndex}
                            xValue={(x) => setFieldValue('x', x.x)}
                            yValue={(y) => setFieldValue('y', y.y)}
                        />}
                        <Modal
                            visible={visible}
                            onRequestClose={() => setVisible(false)}
                            transparent
                        >

                            <View style={styles.modalContainer}>
                                <View style={styles.modal}>
                                    <TouchableWithoutFeedback onPress={() => setVisible(false)}>
                                        <Ionicons
                                            style={styles.modalCloseIcon}
                                            name="close-outline"
                                            size={43}
                                            color="black"
                                        />
                                    </TouchableWithoutFeedback>
                                    <Text style={styles.text}>
                                        Add a new asset
                                    </Text>
                                    <AppTextInput
                                        style={styles.textInput}
                                        placeholder="Name"
                                        onChangeText={handleChange('assetName')}
                                        maxLength={20}
                                    />
                                    <View style={styles.errorContainer}>
                                        {errors.assetName && <Text style={styles.error}>{errors.assetName}</Text>}
                                    </View>
                                    <AppButton
                                        disabled={errors.assetName}
                                        width={'33%'}
                                        position={55}
                                        style={styles.saveButton}
                                        title="Save"
                                        onPress={() => { setPinIndex(true); setVisible(false) }} />

                                </View>
                            </View>
                        </Modal >

                        {pinIndex && <RoundButton
                            style={styles.submitButton}
                            name="save"
                            onPress={handleSubmit}
                            backgroundColor={'rgba(42, 183, 202, 0.7)'}
                        />}
                    </>
                )}
            </Formik>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'

    },
    button: {

    },
    plusIcon: {
        position: 'absolute',
        top: 40,
        right: 5,
    },
    closeIcon: {
        position: 'absolute',
        top: 40,
        left: 5
    },
    submitButton: {
        position: 'absolute',
        bottom: 20,
        right: 10
    },


    /////////////Modal style/////////////////

    modalContainer: {
        flex: 1,
        justifyContent: 'center',

    },
    modal: {
        backgroundColor: 'rgba(220, 220, 220, 7)',
        marginHorizontal: 30,
        borderRadius: 6,
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        height: 250
    },
    transparentModal: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        height: '30%',
        width: '100%'
    },
    text: {
        marginBottom: 6,
        marginLeft: 4,
        fontSize: 20

    },
    textInput: {

    },
    saveButton: {
        marginHorizontal: '35%',
        marginBottom: '9%'
    },
    errorContainer: {
        height: 30,
        marginBottom: 18
    },
    error: {
        color: 'red',
        marginTop: 6,
        marginLeft: 6

    },
    modalCloseIcon: {
        position: 'absolute',
        top: 3,
        right: 3
    }

})
export default AddLocation;