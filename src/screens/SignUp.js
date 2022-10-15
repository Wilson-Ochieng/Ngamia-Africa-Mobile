import { View, Text,Image,StyleSheet, useWindowDimensions,ScrollView} from 'react-native'
import React,{useState} from 'react'
import Logo from "../../assets/images/nalogo.png"
import Input from '../components/CustomInput/Input';
import CustomButton from '../components/CustomButton/CustomButton';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const { height } = useWindowDimensions();
    const onSignInPressed = () => {
         
        console.warn('Register')
    }
    

    const onForgotPasswordPressed = () =>{

    }
    const onSignInFaceBook = () => {
         
    }
    const onSignInGoogle = () => {
        
    }
    const onSignInApple = () => {
         
    }
    
    const onSignUP = () => {
        
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}> Create an Account</Text>
            <Input
                placeholder="Username"
                value={username}
                    setValue={setUsername} />
                <Input
                placeholder="Email"
                value={email}
                setValue={setEmail} />
    
            <Input
                placeholder="Password"
                value={password}
                setValue={setPassword}
                 secureTextEntry
                />
                <Input
                placeholder="Confirm Password"
                value={password}
                setValue={setPasswordRepeat}
                 secureTextEntry
            />

            <CustomButton
                text='Register'
                onPress={onSignInPressed} />
            <CustomButton
                text='Forgot Password?'
                onPress={onForgotPasswordPressed}
                type="TERTIARY" />
            <CustomButton
                text='Sign in With FaceBook'
                onPress={onSignInFaceBook}
                bgColor='#E7EAF4'
                fgColor='#4765A9'
            />
            <CustomButton
                text='Sign in With Google'
                onPress={onSignInGoogle}
                bgColor='#FAE9EA'
                fgColor='#DD4D44'
            />
            <CustomButton
                text='Sign in With Apple'
                onPress={onSignInApple}
                bgColor='#e3e3e3'
                fgColor='#363636'
            />
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
    title: {
        
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin:10,
    }
});
export default SignUp