import React, { useEffect, useState } from 'react';
import { SafeAreaView, Image, AsyncStorage, StyleSheet } from 'react-native';

import logo from '../../assets/logo.png';

export default function List() {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storageTechs => {
            const techsArray = storageTechs.split(',').map(tech => tech.trim());

            setTechs(techsArray);
        });
    }, []);

    return (
        <SafeAreaView style={ styles.container }>
            <Image source={logo} style={ styles.image }/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    image: {
        height: 35,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 50,
    },
});