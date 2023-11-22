import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importa useNavigation desde @react-navigation/native


import CustomInput from "../../components/CustomInput";
import CustomButtom from "../../components/CustomButtom";
import CustomComboBox from "../../components/CustomComboBox";

import axios from 'axios';



const SignInScreen = () => {
  const navigation = useNavigation(); // Obtén el objeto de navegación

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const comboBoxOptions = [
    { label: '----- Selecciona una opción -----', value: undefined },
    { label: 'Estudiante', value: 'estudiante' },
    { label: 'Instructor', value: 'instructor' },
  ];
  const [selectedRole, setSelectedRole] = useState(''); // Estado para almacenar la selección del ComboBox



  const onSignInPressed = () => {


    /*
     try {
       const response = await axios.post('http://127.0.0.1:8000/api/students/', {
         email: email,
         password: password,
       });
 */
    //    const data = await response.json();
    //    console.log('Respuesta del servidor:', data);
    console.log(email);
    console.log(password);

    try {

      if (selectedRole === 'estudiante') {

        console.log('Valor de selectedRole:', selectedRole);
        navigation.navigate('Explorer');
      } else if (selectedRole === 'instructor') {
        console.log('Valor de selectedRole:', selectedRole);
        navigation.navigate('MyRegisteredCourses');
      }

    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  //  if (response.status === 200) {
  // Verificar la opción seleccionada
  /* if (selectedRole === 'estudiante') {
     // Redireccionar a la página de estudiantes
     navigation.navigate('Explorer');
   } else if (selectedRole === 'instructor') {
     // Redireccionar a la página de instructores
     navigation.navigate('RegisteredCourses');
   }*/


  /*      } else {
          Alert.alert('Inicio de sesión fallido', 'Verifica tus credenciales');
        }
        */
  /* } catch (error) {
     Alert.alert('Error', 'Hubo un problema al intentar iniciar sesión');
   }*/



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

      <Text>Rol</Text>

      <CustomComboBox
        options={comboBoxOptions}
        onSelect={setSelectedRole}
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