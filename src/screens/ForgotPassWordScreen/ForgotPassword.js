import { View, Text,StyleSheet,ScrollView} from 'react-native'
import React,{useState} from 'react'
import Input from '../../components/CustomInput/Input';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
    const [username, setUsername] = useState('');
    const [appSigned, setAppSigned] = useState('');
    const [adOwner, setAdOwner] = useState('');
    const navigation= useNavigation()
   

 fetch('https://apide.ngamia.africa/api/MQUserAuthentications/ForgetPassword', {  
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
     body: JSON.stringify({
         username: "string",
         appSigned: "QASDRTY76",
         adOwner: true
  })
})

     
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
            <Input
                placeholder="appSigned"
                value={appSigned}
                    setValue={setAppSigned} />
            <Input
                placeholder="adOwner"
                value={adOwner}
                    setValue={setAdOwner} />


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