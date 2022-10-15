import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton/CustomButton'

const SocialSignins = () => {
     const onSignInFaceBook = () => {
         
    }
    const onSignInGoogle = () => {
        
    }
    const onSignInApple = () => {
         
    }

  return (
    <>
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
    </>
  )
}

export default SocialSignins