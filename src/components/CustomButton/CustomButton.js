
import { View, Text,StyleSheet,Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress,text,type}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
          <Text style={styles.text}>{ text}</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#9A6B63",
        width: 350,
        padding: 15,
        marginVertical: 5,
        alignItems: "center",
        borderRadius:5
    },
    text: {
        fontWeight: 'bold',
        color:'white'

    }

 })
export default CustomButton