import { View, Text,Button } from 'react-native'
import React from 'react'
import { useState } from 'react'

const UseStateHook = () => {
    const [name,setName]=useState("")
    const words = [
        "apple", "banana", "chocolate", "developer", "elephant", 
        "forest", "guitar", "happiness", "internet", "jazz", 
        "kangaroo", "laptop", "mountain", "notebook", "ocean", 
        "puzzle", "quasar", "rainbow", "sunshine", "tornado"
      ];
      
      
    const press=()=>{
        let a=Math.floor(Math.random()*20)
        setName(words[a])
    }
  return (
    <View>
      <Text style={{fontSize:50,margin:"auto"}}>{name}</Text>
        <Button title="Press me" onPress={press}/>
    </View>
  )
}

export default UseStateHook