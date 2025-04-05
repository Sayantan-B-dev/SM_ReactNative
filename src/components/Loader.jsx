import {View, Text, ActivityIndicator, TouchableOpacity,StyleSheet} from 'react-native';
import React, {useState} from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.button}
        activeOpacity={0.2}
        onPress={() => {
          setLoading(!loading);
        }}>
        <Text style={style.buttonText}>
          {loading ? 'Hide Loading' : 'Show Loading'}
        </Text>
      </TouchableOpacity>
      {
        loading && (
            <View style={style.showLoading}>
                <ActivityIndicator size="large" color="blue" />
                <Text>Loading...</Text>
            </View>
        )
      }
    </View>
  );
};
const style = StyleSheet.create({
    container:{
        height:'100%',
        marginVertical:'auto',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
  button: {
    backgroundColor: '#007bff',
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical:20,
    marginHorizontal: 'auto',
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  showLoading:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    gap:10,
    alignItems:'center',
  },
});
export default Loader;
