import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';
import AppTextInput from './AppTextInput';
import AppButton from './AppButton';

function ListItem({ assetName, editAsset = false, deleteAsset, ...otherProps }) {

    const [visible, setVisible] = useState(false);
    const [editView, setEditView] = useState(false);
    const [name, setName] = useState(assetName)

    const renderDropDown = () => {
        if (visible)
            return (
                <View style={styles.dropDown} {...otherProps}>
                    <View style={{ width: '76%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.dropDownText}>
                            Asset Name : {name}
                        </Text>
                    </View>
                    <TouchableWithoutFeedback onPress={() => setEditView(!editView)}>
                        <View style={styles.editIcon}>
                            <Entypo name="edit" size={24} color="black" />
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={deleteAsset}>
                        <View style={styles.trashIcon}>
                            <Ionicons name="trash-outline" size={24} color="black" />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            )
    };

    const editAssetName = () => {
        if (editView)
            return (
                <View style={styles.editAsset}>
                    <AppTextInput
                        placeholder="Enter new asset name"
                        onChangeText={(text) => setName(text)}
                    />
                    <View style={styles.buttonContainer}>
                        <AppButton
                            style={styles.saveButton}
                            width='30%'
                            title="Save"
                            onPress={() => setEditView(false)}
                        />
                    </View>
                    <View style={styles.separator}></View>
                </View>
            )
    }
    return (
        <View style={{ width: '100%' }} {...otherProps}>
            <View style={styles.container}>
                <Text style={styles.assetName}>
                    {assetName}
                </Text>
                <View style={styles.verticalSeparator}></View>
                <View style={styles.separator}></View>
                <TouchableWithoutFeedback onPress={() => {
                    setVisible(!visible);
                    setEditView(false)
                }}>
                    <View style={styles.iconContainer}>
                        <Entypo name="chevron-down" size={24} color="black" />
                    </View>
                </TouchableWithoutFeedback>
            </View>

            {renderDropDown()}
            {editAssetName()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        justifyContent: 'center',
        backgroundColor: '#f4f4f8',
        borderRadius: 6
    },
    assetName: {
        fontSize: 25,
        marginLeft: 15
    },
    separator: {
        backgroundColor: '#4a4e4d',
        width: '96%',
        height: 1,
        borderRadius: 20,
        position: 'absolute',
        bottom: 5,
        left: '2%'
    },
    verticalSeparator: {
        height: '66%',
        width: 1,
        backgroundColor: '#4a4e4d',
        borderRadius: 20,
        position: 'absolute',
        right: 70,
        top: 12
    },
    iconContainer: {
        width: 67,
        height: '100%',
        position: 'absolute',
        top: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },

    ///DROP DOWN /////////
    dropDown: {
        width: '100%',
        height: 80,
        backgroundColor: '#f4f4f8',
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#4a4e4d'
    },
    dropDownText: {
        fontSize: 18,

    },
    editIcon: {
        width: '12%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    trashIcon: {
        width: '12%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    editAsset: {
        width: '100%',
        height: 140,
        justifyContent: 'center',
        alignItems: 'center',


    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        marginTop: 10
    },
    saveButton: {
        position: 'relative'
    },
    cancelButton: {
        position: 'relative'
    }
})
export default ListItem;