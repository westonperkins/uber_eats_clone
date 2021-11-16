import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements'
import About from '../components/RestaurantDetail/About'
import MenuItem from '../components/RestaurantDetail/MenuItem'

export default function RestaurantDetail() {
    return (
        <View>
            <About/>
            <Divider width={1.8} style={{marginVertical: 20}} />
            <MenuItem/>
        </View>
    )
}
