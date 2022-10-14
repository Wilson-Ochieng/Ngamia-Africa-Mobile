import { View, Text,Image,StyleSheet, useWindowDimensions} from 'react-native'
import React,{useState} from 'react'
import Logo from "../../assets/images/nalogo.png"
import Input from '../components/CustomInput/Input';
import CustomButton from '../components/CustomButton/CustomButton';

const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { height } = useWindowDimensions();
    return (
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
            

             />
      
        </View>

        
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        padding:20,
    },
    logo: {
        width: "70%",
        maxWidth:500,
        height: 100,
    },
});
export default Signin