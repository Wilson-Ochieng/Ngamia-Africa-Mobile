import { View, Text, FlatList } from 'react-native'
import React from 'react'

const Advert = () => {

  fetch('https://apide.ngamia.africa/api/MQChannelsData/GetMarquees', {  
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
     body: JSON.stringify({
        ChannelCode:MarqueePortal,
        
  })
})





  return (
    <FlatList>
      <Text>{ ChannelCode}</Text>
    </FlatList>
  )
}

export default Advert