import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import logo from '../../assets/logo.png';

export default function Login() {
    return (
        <View style={styles.container}>
            <Image source={logo}></Image>

            <View style={styles.form}>
                <Text style={styles.label}>SEU E-MAIL *</Text>
                <TextInput
                    style = {styles.input}
                    placeholder = 'Seu melhor e-mail'
                    placeholderTextColor = '#999'
                    keyboardType = 'email-address'
                    autoCapitalize = 'none'
                    autoCorrect = { false }
                />

                <Text style={styles.label}>TECNOLOGIAS * <Text style={styles.span}>(separadas por vírgula)</Text> </Text>
                <TextInput
                    style = {styles.input}
                    placeholder = 'Ex.: Node.js, React, React Native'
                    placeholderTextColor = '#999'
                    autoCapitalize = 'words'
                    autoCorrect = { false }
                />

                <TouchableOpacity style={ styles.button }>
                    <Text style={ styles.buttonText }> Encontrar spots </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30
    },

    label: {
        fontWeight: '700',
        color: '#444',
        marginBottom: 8
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
        marginBottom: 20,
        borderRadius: 2
    },
    
    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },

    buttonText: {
        color: '#FFF',
        fontWeight: '700',
        fontSize: 16,
    },
});