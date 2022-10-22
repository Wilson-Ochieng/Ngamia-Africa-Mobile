import { View, Text,StyleSheet, useWindowDimensions,ScrollView} from 'react-native'
import React,{useState} from 'react'
import Input from '../../components/CustomInput/Input';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignins from '../../components/SocialSignins/SocialSignins';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    //Height needed for logo Sign Screen only

 fetch('https://apide.ngamia.africa/api/MQUserAuthentications/Registerse/', {  
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
     body: JSON.stringify({
    firstName: "string",
    middleName: "string",
     lastName: "string",
     gender: "string",
     phone: "string",
     email: "user@example.com",
     password: "string",
    activationURL: "https://customerdev-marquee.ngamia.africa//activation?"
  })
})

 
    const navigation = useNavigation();
    const onSignRegisterPressed= () => {
        navigation.navigate("ConfirmEmail");
    }
    
    const onTermsOfUsePress = () => {
        console.warn('onTermsOfUsePress')
    }
    const onPrivacyPressed = () => {
        
          console.warn('onTermsOfUse')
    }
    
    const onSigninPressed = () => {
        navigation.navigate("Signin");
        
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}> Create an Account</Text>
            <Input
                placeholder="FirstName"
                value={firstName}
                    setValue={setFirstName} />
            <Input
                placeholder="Middlename"
                value={middleName}
                    setValue={setMiddleName} />
            <Input
                placeholder="Lastname"
                value={lastName}
                    setValue={setLastName} />
            <Input
                placeholder="Gender"
                value={gender}
                    setValue={setGender} />
            <Input
                placeholder="Phone"
                value={phone}
                    setValue={setPhone} />
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
                value={passwordRepeat}
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
                 {/* <SocialSignins/> */}
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
export default SignUp