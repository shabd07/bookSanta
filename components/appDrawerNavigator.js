import React from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {AppTabNavigator} from './AppTabNavigator'
import {CustomSideBarMenu} from './customSideBar'
export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
},
    {contentComponent:CustomSideBarMenu},
{
    intialRouteName:'Home'
})