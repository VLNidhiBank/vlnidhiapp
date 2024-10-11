import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import AuthNavigation from './AuthNavigation'
import MemberNavigator from './MemberNavigator'
import { useSelector } from 'react-redux'


const Index = () => {
  
  const token = useSelector(state => state.loginSlice.loginData.Token)
  const [user, setUser] = useState(true)
  const [userType, setUserType] = useState("ADVISOR");
  const initApp = async () => {
  };
useEffect(() => {
  console.log(token,"This is token inside index")

},[token])

  return (
    <NavigationContainer>
      {/* {!user ?
        <AuthNavigation />
        : userType === "ADVISOR" ?
        <AdvisorNavigator />
        :
        <MemberNavigator />
      } */}
      {token ? <MemberNavigator /> : <AuthNavigation />}
    </NavigationContainer>
  )
}

export default Index
