
import { View, Text,StyleSheet,Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress,text,type ="PRIMARY",bgColor,fgColor}) => {
  return (
      <Pressable
          onPress={onPress}
          style={[styles.container,
              styles[`container_${type}`],
              bgColor ?{backgroundColor:bgColor}:{}
          ]}>
          <Text
              style={[styles.text,
                  styles[`text_${type}`],
              fgColor ? {color:fgColor}:{}
              ]}
          >
              {text}
          </Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
    container: {
        width:'100%',
        padding: 15,
        marginVertical: 5,
        alignItems: "center",
        borderRadius:5
    },


    container_PRIMARY: {
        backgroundColor: "#9A6B63",
    },
     container_SECONDARY: {
         borderColor: "#9A6B63",
         borderWidth:2,
         
    },

    container_TERTIARY: {},
    text: {
        fontWeight: 'bold',
        color:'black'

    },
    
    text_TERTIARY: {
        
        color:'gray',
    },
    text_SECONDARY: {
        
        color: "#9A6B63"
    },
   
 })
export default CustomButton