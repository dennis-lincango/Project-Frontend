// CustomComboBox.js

import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';

const CustomComboBox = ({ options, onSelect  }) => {
    const [selectedValue, setSelectedValue] = useState(options[0].value);


    const handleValueChange = (itemValue) => {
        setSelectedValue(itemValue);
        onSelect(itemValue); // Llama a la función onSelect pasada como prop
    };

    return (
        <View>
            <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={handleValueChange}
            >
                {options.map((option, index) => (
                    <Picker.Item key={index} label={option.label} value={option.value} />
                ))}
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
   
    picker: {
        backgroundColor: 'white',
        width: 'auto',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 5,
    },
    /*selectedText: {
        marginTop: 10,
        fontSize: 16,
    },*/
});

export default CustomComboBox;



/*
 container: {
        backgroundColor: 'white',
        width: '100%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 5,

    },
    input: {},
}
})*/