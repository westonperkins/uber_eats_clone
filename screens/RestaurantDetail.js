import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements'
import About from '../components/RestaurantDetail/About'
import MenuItem from '../components/RestaurantDetail/MenuItem'
import ViewCart from '../components/RestaurantDetail/ViewCart'

export default function RestaurantDetail({route, navigation}) {
    return (
        <View>
            <About route={route}/>
            <Divider width={1.8} style={{marginVertical: 20}} />
            <MenuItem/>
            <ViewCart navigation={navigation} restaurantName={route.params.name}/>
        </View>
    )
}
