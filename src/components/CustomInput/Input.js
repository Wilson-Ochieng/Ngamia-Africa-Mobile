import { View,Text, TextInput,StyleSheet } from 'react-native'
import React from 'react'

const Input = () => {
    return (
        <View style={styles.container}>
            <TextInput placeholder='Username' styles={styles.input}>
              
            </TextInput>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderColor: "#e8e8e8",
        borderWidth: 1,
        borderRadius:5,
    },
    input: {},

    

});

export default Input