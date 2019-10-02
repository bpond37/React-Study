
import {createSwitchNavigator,  } from '@react-navigation/core'
import {createBrowserApp} from '@react-navigation/web'
import {createStackNavigator} from 'react-navigation-stack-web'
import React,{Text} from 'react'
import Main from './Main';
import MyPage from './MyPage';
import Login from './Login';
import Splash from './Splash';

const stackNav = createStackNavigator({
    Main:{screen:Main},
    MyPage:{screen:MyPage}

},{
    defaultNavigationOptions:({navigation})=>{
        return{
            headerLeft:(
                <Text>dd</Text>
            )
        }
    }
})

const switchNav = createSwitchNavigator({
    Splash:{screen:Splash},
    Login:{screen:Login},
    Main:{screen:stackNav}
},{
    initialRouteName:'Splash'
})

const AppNav = createBrowserApp(switchNav)

export default AppNav
