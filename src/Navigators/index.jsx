import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import AuthNavigation from './AuthNavigation'
import MemberNavigator from './MemberNavigator'
import { useSelector } from 'react-redux'


const Index = () => {
  
  const token = useSelector(state => state.loginSlice.loginData.Token)
  // const token = useState(true)
  const data = useSelector(state => state.loginSlice.loginData)

  const [user, setUser] = useState(true)
  // const [userType, setUserType] = useState("ADVISOR");
  // const initApp = async () => {
  // };
useEffect(() => {
  console.log(token,"This is token inside index")
  console.log(data,"This is data")

},[token]);

  return (
    <NavigationContainer>
      {!token ?
        <AuthNavigation />
        : token && data.usertype === "ROLE_ADVISOR" ?
        <AdvisorNavigator />
        : token && data.usertype === "ROLE_MEMBER" ?
        <MemberNavigator />
        :
        <></>
      }
      {/* {token ? <MemberNavigator /> : <AuthNavigation />} */}
    </NavigationContainer>
  )
}

export default Index
