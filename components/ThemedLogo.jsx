import { Image, useColorScheme } from 'react-native'
import React from 'react'

import DarkLogo from '../assets/img/RnR.jpg'
import LightLogo from '../assets/img/logo.jpeg'

const ThemedLogo = ({ ...props}) => {
    const colorScheme = useColorScheme()

    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

  return (
    <Image source={logo} {...props} />
  )
}

export default  ThemedLogo