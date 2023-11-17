import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import CustomInput from "../../components/CustomInput";
import CustomButtom from "../../components/CustomButtom";
import axios from 'axios';



const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSignInPressed = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/students/', {
                method: 'POST',
                // mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
    
            const data = await response.json();
            console.log('Respuesta del servidor:', data);
    
            if (response.status === 200) {
                Alert.alert('Inicio de sesión exitoso');
            } else {
                Alert.alert('Inicio de sesión fallido', 'Verifica tus credenciales');
            }
        } catch (error) {
            Alert.alert('Error', 'Hubo un problema al intentar iniciar sesión');
        }
    };



    return (
        <View style={styles.root}>
            <Text style={styles.text}> Inicia sesión en tu cuenta </Text>

            <Text>Correo</Text>

            <CustomInput
                placeholder='Correo'
                value={email}
                setValue={setEmail}
            />

            <Text>Contraseña</Text>

            <CustomInput
                placeholder='Contraseña'
                value={password}
                setValue={setPassword}
                secureTextEntry
            />

            <CustomButtom
                text='Sign in'
                onPress={onSignInPressed}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    root: {
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontWeight: 'bold',
        padding: 50
    },


})

export default SignInScreen;