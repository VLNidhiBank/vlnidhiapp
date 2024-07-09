import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import AuthNavigation from './AuthNavigation'
import MemberNavigator from './MemberNavigator'

const index = () => {
  const [user, setUser] = useState(false)
  return (
    <NavigationContainer>
      {!user ?
        <MemberNavigator />
        :
        <AuthNavigation />
      }
    </NavigationContainer>
  )
}

export default index
