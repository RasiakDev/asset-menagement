import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import * as data from '../json/Data.json'
import AppTextInput from './AppTextInput';


function SearchBar({ updateMain }) {

    const [name, setName] = useState();

    const search = (name) => {
        let loc = data.locations.find(item => item.assetName === name);
        let wrong = data.locations.find(item => item.assetName);
        let red;
        if (loc != null)
            red = loc.color = 'red';
        if (loc == null)
            data.locations.forEach(element => {
                element.color != 'black'
                element.color = 'black'
            });
        // wrong = wrong.color = 'black'

        updateMain({ data })
    }

    return (

        <View style={styles.container}>
            <AppTextInput
                style={styles.searchBar}
                width='100%'
                placeholder="Insert asset name"
                borderRadius={20}
                onChangeText={(text) => search(text)}
                iconName="search"

            />
            {/* <RoundButton
                style={styles.searchButton}
                name="search"
                size={27}
                onPress={() => updateMain({ data })}
                backgroundColor='#eee'
            /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        position: 'absolute',
        width: '45%',
        top: 40,
        left: '27%',
        alignItems: 'center',
        borderRadius: 20,
    },
    searchBar: {
        backgroundColor: '#eee',
        paddingLeft: 15
    },
    searchButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginLeft: 6,
    }
})
export default SearchBar;