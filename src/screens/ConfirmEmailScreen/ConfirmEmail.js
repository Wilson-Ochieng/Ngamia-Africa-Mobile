import { View, Text,StyleSheet,ScrollView} from 'react-native'
import React,{useState} from 'react'
import Input from '../../components/CustomInput/Input';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmail = () => {
    const [code, setCode] = useState('');
    const navigation = useNavigation();
   
    //Height needed for logo Sign Screen only
    const onConfirmPressed= () => {
        navigation.navigate('Home')
    }

    
    const onSigninPressed = () => {

     navigation.navigate('Signin')
        
    }
    const onResendPressed = () => {
        

    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}> Confirm your email</Text>
            <Input
                placeholder="Enter your confirmation code"
                value={code}
                    setValue={setCode} />


            <CustomButton
                text='Confirm'
                onPress={onConfirmPressed} />
                           
            <CustomButton
                text='Resend Code'
                onPress={onResendPressed}
                type="SECONDARY" />
      
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
export default ConfirmEmail