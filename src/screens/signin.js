import { View, Text,Image,StyleSheet, useWindowDimensions,ScrollView} from 'react-native'
import React,{useState} from 'react'
import Logo from "../../assets/images/nalogo.png"
import Input from '../components/CustomInput/Input';
import CustomButton from '../components/CustomButton/CustomButton';
import SocialSignins from '../components/SocialSignins/SocialSignins';

const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { height } = useWindowDimensions();
    const onSignInPressed = () => {
         
        console.warn('Sign in')
    }
    
    const onForgotPasswordPressed = () =>{

    }
       
    const onSignUP = () => {
        
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Image source={Logo}
                style={[styles.logo, { height: height * 0.3 }]}
                    resizeMode = "contain" />
            <Input
                placeholder="Username"
                value={username}
                setValue={setUsername} />
            <Input
                placeholder="Password"
                value={password}
                setValue={setPassword}
                 secureTextEntry
            />

            <CustomButton
                text='Sign-in'
                onPress={onSignInPressed} />
            <CustomButton
                text='Forgot Password?'
                onPress={onForgotPasswordPressed}
                type="TERTIARY" />
               <SocialSignins/>
            <CustomButton
                text='Have an Account?Register'
                onPress={onSignUP}
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
    logo: {
        width: "40%",
        maxWidth:500,
        height: 100,
    },
});
export default Signin