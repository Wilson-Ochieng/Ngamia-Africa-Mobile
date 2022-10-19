import { View, Text,StyleSheet, useWindowDimensions,ScrollView} from 'react-native'
import React,{useState} from 'react'
import Input from '../../components/CustomInput/Input';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignins from '../../components/SocialSignins/SocialSignins';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
    const [firstname, setFirstname] = useState('');
    const [middlename, setMiddlename] = useState('');
    const [lastname, setLastname] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    //Height needed for logo Sign Screen only

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
                placeholder="Firstname"
                value={firstname}
                    setValue={setFirstname} />
            <Input
                placeholder="Middlename"
                value={middlename}
                    setValue={setMiddlename} />
            <Input
                placeholder="Lastname"
                value={lastname}
                    setValue={setLastname} />
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
export default SignUp