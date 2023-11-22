import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import CustomButtom from "../../components/CustomButtom";
import { useNavigation } from '@react-navigation/native';



const MyRegisteredCourses = () => {
    const navigation = useNavigation(); // Obtén el objeto de navegación

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Llama a tu API para obtener la lista de cursos
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/courses/'); // Reemplaza 'tu_api/registered-courses' con la URL de tu API
                setCourses(response.data);
            } catch (error) {
                console.error('Error al obtener los cursos:', error);
            }
        };

        fetchData();
    }, []);

    const handleDeleteCourse = (courseId) => {
        // Lógica para eliminar el curso con el ID courseId
        // Puedes llamar a tu API para realizar la eliminación y luego actualizar la lista de cursos
    };

    const navigateToAddCourse = () => {
        // Navegar a la pantalla de agregar curso
        navigation.navigate('AddCourse'); // Reemplaza 'AgregarCurso' con el nombre de tu pantalla de agregar curso
    };

    const renderCourseItem = ({ item }) => (
        <View style={styles.courseItem}>
            <Text>{item.courseName}</Text>
            <TouchableOpacity onPress={() => handleDeleteCourse(item.id)}>
                <Text style={styles.deleteButton}>Eliminar</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View>
            <Text style={styles.text}>My Registered Courses</Text>
            <FlatList
                data={courses}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderCourseItem}
            />

            <CustomButtom
                text='Agregar curso'
                onPress={navigateToAddCourse}
            />

        </View>

    );
};

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        padding: 50
    },
    courseItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    deleteButton: {
        color: 'red',
    },
});

export default MyRegisteredCourses;
