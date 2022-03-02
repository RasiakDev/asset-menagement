import React, { useState } from 'react';
import { View, StyleSheet, Modal, Text, KeyboardAvoidingView, TouchableWithoutFeedback, TextInput } from 'react-native';
import AppButton from './AppButton';
import AppTextInput from './AppTextInput';

function ModalInput({ onPress, visibleModal = 'false', title, buttonTitle }) {


    const [inputValue, setInputValue] = useState('');
    const [visible, setVisible] = useState(visibleModal);

    const toggleModal = () => {
        setVisible(!visible)
    }
    return (


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
                        {title}
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
                        width={'33%'}
                        position={55}
                        style={styles.saveButton}
                        title={buttonTitle}
                        onPress={() => { setPinIndex(true); setVisible(false) }} />

                </View>
            </View>
        </Modal >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(25, 25, 25, 0)'
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
        marginLeft: 4

    },
    textInput: {
        marginBottom: '20%'
    },
    saveButton: {
        marginHorizontal: '35%',
        marginBottom: '12%'
    }
})
export default ModalInput;