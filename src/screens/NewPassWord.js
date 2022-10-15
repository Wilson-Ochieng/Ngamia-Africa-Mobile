import { View, Text,StyleSheet,ScrollView} from 'react-native'
import React,{useState} from 'react'
import Input from '../components/CustomInput/Input';
import CustomButton from '../components/CustomButton/CustomButton';

const NewPassword = () => {
    const [code, setCode] = useState('');
    const [newPass, setNewPass] = useState('');
   
    //Height needed for logo Sign Screen only
    const onSubmitPressed= () => {
         
        console.warn('sent')
    }

    
    const onSigninPressed = () => {
        
    }
    
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}> Reset Your Password</Text>
            <Input placeholder="Code"  value={code} setValue={setCode} />
            <Input placeholder="Enter your New Password" value={newPass} setValue={setNewPass} />
           <CustomButton text='Submit' onPress={onSubmitPressed} />
                           
      
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
export default NewPassword