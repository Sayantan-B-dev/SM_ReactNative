/* eslint-disable eol-last */
/* eslint-disable semi */
import { View, Text,Button } from 'react-native'
import React, { useState } from 'react'
import OnPress from './src/components/OnPress'
import UseStateHook from './src/components/UseStateHook'
import Props from './src/components/Props'

const App = () => {
  const [num, setNum] = useState(0)
  return (
    <View>
      <Props />
    </View>
  )
}

export default App