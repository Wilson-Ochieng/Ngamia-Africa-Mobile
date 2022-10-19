import { View, Text,StyleSheet,ScrollView} from 'react-native'
import React,{useState} from 'react'
import Input from '../../components/CustomInput/Input';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
    const [username, setUsername] = useState('');
    const navigation= useNavigation()
   
    //Height needed for logo Sign Screen only
    const onSendPressed= () => {
         
    navigation.navigate("NewPassword")
    }

    
    const onSigninPressed = () => {
           navigation.navigate("Signin")
        
    }
    
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}> Reset Your Password</Text>
            <Input
                placeholder="Username"
                value={username}
                    setValue={setUsername} />


            <CustomButton
                text='Send'
                onPress={onSendPressed} />
                           
      
            <CustomButton
                text='Back to Sign in'
                onPress={onSigninPressed}
                type="TERTIARY" />
      
            </View>
            </ScrollView>

        
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        padding:20,
    },
        
    title: {
        
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin:10,
    },
    text: {
        color: "gray",
        marginVertical: 10,

        
    },
    link: {
        color:"#FDB075"
    }
});
export default ForgotPassword