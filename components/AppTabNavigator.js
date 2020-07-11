import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Deal from '../screens/deal';
import Trade from '../screens/trade';



export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks : {
    screen: Trade,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/trade.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Trade",
    }
  },
  BookRequest: {
    screen: Deal,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/icon1.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Deal",
    }
  }
});
