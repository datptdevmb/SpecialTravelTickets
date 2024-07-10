import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthenStackNavigation from './screens/authen/AuthenStackNavigation'
import { AppContext} from './screens/AppContext'
import TabNavigation from './screens/main/TabNavigation'

const AppNavigation = () => {
    const { isLogin } = useContext(AppContext);
    return (
        <NavigationContainer>
            {
                isLogin ?
                    <AuthenStackNavigation /> :
                    <TabNavigation />
            }
        </NavigationContainer>
    )
}

export default AppNavigation