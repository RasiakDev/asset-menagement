import React, { useState } from 'react';
import { View, StyleSheet, Modal, TouchableWithoutFeedback, Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import ListItem from './ListItem';
import * as data from '../json/Data.json';
import { FlatList } from 'react-native-gesture-handler';
import ModalInput from './ModalInput';

function UserModal({ updateMain }) {

    const [visible, setVisible] = useState(false);
    const [userData, setUserData] = useState(data.locations);
    const [updateState, setUpdateState] = useState()
    const [updateMainState, setUpdateMainState] = useState()



    const deleteAsset = (item) =>
        Alert.alert(
            "Warning",
            "Do you want to delete this asset?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () => {
                        data.locations.splice(item, 1);
                        setUpdateState(data);
                        updateMain({ data })
                    }
                }
            ]
        );

    return (

        <>

            <TouchableWithoutFeedback onPress={() => setVisible(true)}

            >
                <View style={styles.iconContainer}>
                    <View style={styles.iconView}>
                        <Entypo name="air" size={44} color="black" />
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <Modal
                animationType="slide"
                visible={visible}
                transparent={true}
                onRequestClose={() => setVisible(false)}
            >
                <View style={styles.container}>
                    <TouchableWithoutFeedback onPress={() => setVisible(false)}

                    >
                        <View style={styles.iconContainer}>
                            <View style={styles.iconView}>
                                <Entypo name="air" size={44} color="black" />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={[styles.modal, { height: '80%' }]}>
                        {/* {Data.locations.map((item, key) => {
                            return (
                                <ListItem key={key} assetName={item.assetName} />
                            )
                        })} */}
                        <FlatList
                            data={data.locations}
                            keyExtractor={(item, index) => index.toString()}
                            scrollEnabled
                            renderItem={({ item, index }) => {
                                return (
                                    <ListItem
                                        deleteAsset={() => {
                                            // setUserData(userData.filter(element => element.x != item.x))
                                            deleteAsset(index)
                                        }}
                                        editAsset={() => {
                                            setUpdateState(data)
                                        }}
                                        assetName={item.assetName} />
                                )
                            }}
                        />
                    </View>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-end',
        marginRight: 12
    },
    modal: {
        width: '100%',
        marginHorizontal: 6,
        backgroundColor: '#f4f4f8',
        borderRadius: 3,
    },
    iconContainer: {
        alignItems: 'center',
        width: '100%'
    },
    iconView: {
        backgroundColor: '#f4f4f8',
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default UserModal;