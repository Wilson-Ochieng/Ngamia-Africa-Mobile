import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Input from '../../components/CustomInput/Input';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';



const Ads = () => {


    const [adverts, setAdverts] = useState([]);
    const [loading, setLoading] = useState(true)
    const url = "https://jsonplaceholder.typicode.com/photos";
    useEffect(() => {

        fetch(url)
            .then((response) => response.json())
            .then((json) => setAdverts(json))
            .catch((error) => alert(error))
            .finally(() => setLoading(false));
    }, []);




    return (
        <View >
            {
                loading ? <Text>Loading ...</Text> : (
                    adverts.map((photo) => (
                        <View>
                            <Text> {photo.thumbnailUrl}</Text>
                            <Text> {photo.albumId}</Text>


                        </View>
                    )
                    )
                )
            }

        </View>
    )
}

export default Ads