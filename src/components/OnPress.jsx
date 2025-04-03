import { View, Text, Button } from 'react-native'
import React from 'react'

const OnPress = () => {

  const func = () => {
    console.warn("Someone pressed me!")
  }
  const func2 = (name) => {

    console.warn(name+name)
  }

  return (
    <View style={{ alignItems: 'center', marginTop: 50 }}>
      <Text style={{ fontSize: 50, alignSelf: 'center' }}>onPress</Text>
      <Button title="Press Me" onPress={func} />
      <Text>         </Text>
      <Button title="Press Me" onPress={()=>func2('Hi')} />
    </View>
  )
}

export default OnPress
