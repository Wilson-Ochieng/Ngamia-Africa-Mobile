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
    container: {},
    input: {},
    

});

export default Input