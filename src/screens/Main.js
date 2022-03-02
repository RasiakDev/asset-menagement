import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Pin from '../components/Pin';
import AddLocation from '../components/AddLocation';
import * as data from '../json/Data.json';
import UserModal from '../components/UserModal';
import SearchBar from '../components/SearchBar';

function Main({ style, children }) {

    const functionToChild = (i) => {
        setdataState(dataState)
    }

    console.log(data.locations)
    const [update, setUpdate] = useState(data);

    return (
        <>

            <SearchBar updateMain={(data) => setUpdate(data)} />
            <UserModal updateMain={(data) => setUpdate(data)} />
            <AddLocation updateMain={(newData) => setUpdate(newData)} functionToParent={functionToChild} />
            {data.locations.map((item, key) => {
                // console.log(item.x, item.y)
                return (
                    <Pin
                        key={key}
                        color={item.color}
                        style={{
                            left: item.x,
                            top: item.y,
                            position: 'absolute',
                        }} />
                )
            })}
        </>
    );
}

const styles = StyleSheet.create({
    pinButton: {
        position: 'absolute',
        bottom: 30,
        right: 10
    }
})
export default Main;