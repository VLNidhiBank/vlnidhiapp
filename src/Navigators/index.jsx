import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import AuthNavigation from './AuthNavigation'
import MemberNavigator from './MemberNavigator'
import AdvisorNavigator from './AdvisorNavigator'

const Index = () => {
  const [user, setUser] = useState(true)
  const [userType, setUserType] = useState("ADVISOR");

  return (
    <NavigationContainer>
      {/* {!user ?
        <AuthNavigation />
        : userType === "ADVISOR" ?
        <AdvisorNavigator />
        :
        <MemberNavigator />
      } */}
      {user ? <AuthNavigation /> : <MemberNavigator />}
    </NavigationContainer>
  )
}

export default Index
