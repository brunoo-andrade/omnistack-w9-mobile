import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, StyleSheet, AsyncStorage, Alert } from 'react-native';

import api from '../services/api';

export default function Book({ navigation }) {
    const id = navigation.getParam('id');
    const [date, setDate] = useState('');

    async function handleSubmit() {
        const user_id = await AsyncStorage.getItem('user');

        await api.post(`/spots/${id}/booking`, { date }, {
            headers: { user_id }
        });

        Alert.alert('Solicitação de reserva enviada.');

        navigateToList();
    }

    function navigateToList() {
        navigation.navigate('List');
    }

    return (
        <SafeAreaView style={ styles.container }>
            <Text style={ styles.label }>DATA DE INTERESSE *</Text>
            <TextInput
                style = { styles.input }
                placeholder = 'Qual data você quer reservar?'
                placeholderTextColor = "#999"
                autoCapitalize = "words"
                autoCorrect = { false }
                autoFocus = { true }
                value = { date }
                onChangeText = { setDate }
            />
            <TouchableOpacity onPress={ handleSubmit } style={ styles.button }>
                <Text style={ styles.buttonText }>Solicitar reserva</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={ navigateToList } style={ [styles.button, styles.buttonCancel] }>
                <Text style={ styles.buttonText }>Cancelar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        paddingHorizontal: 30,
    },

    label: {
        fontWeight: '700',
        color: '#444',
        marginBottom: 8,
    },

    span:{
        color: '#ddd',
        fontSize: 12,
        fontWeight: '500'
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 10,
        borderRadius: 2
    },

    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 10,
    },

    buttonCancel: {
        backgroundColor: '#ccc',
    },

    buttonText: {
        color: '#FFF',
        fontWeight: '700',
        fontSize: 15,
    },
})
