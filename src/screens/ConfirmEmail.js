import { View, Text,StyleSheet, useWindowDimensions,ScrollView} from 'react-native'
import React,{useState} from 'react'
import Input from '../components/CustomInput/Input';
import CustomButton from '../components/CustomButton/CustomButton';
import SocialSignins from '../components/SocialSignins/SocialSignins';

const ConfirmEmail = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    //Height needed for logo Sign Screen only
    const onSignRegisterPressed= () => {
         
        console.warn('Register')
    }
    
    const onTermsOfUsePress = () => {
        console.warn('onTermsOfUsePress')
    }
    const onPrivacyPressed = () => {
        
          console.warn('onTermsOfUse')
    }
    
    const onSigninPressed = () => {
        
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
                onPress={onSignRegisterPressed} />
            
                <Text style={styles.text}>
                    By registering,you confirm that you accept  our {''}
                    <Text style={styles.link} onPress={onTermsOfUsePress}>
                        Terms  of Use</Text> {''}
                    and {''}
                    <Text style={styles.link} onPress={onPrivacyPressed}>
                        Privacy Policy</Text>
                </Text>
                 <SocialSignins/>
            <CustomButton
                text='Have an Account?Sign in'
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
export default ConfirmEmail