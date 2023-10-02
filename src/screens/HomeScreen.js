import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { useContext,useEffect,useState } from 'react'
import { AuthFlow } from '../../App'
import { Button } from 'react-native-paper'
import * as SecureStore from 'expo-secure-store';

const HomeScreen = () => {
    const {setLoginKey,setIsSignIn} = useContext(AuthFlow);
    const [username,setUsername] = useState('');

    const getLoginKey = async() =>{
        let key = await SecureStore.getItemAsync('usr_id');
       setUsername(key);
       }

    useEffect(()=>{
     getLoginKey();
     
    },[])
    const logOut = () =>{
        setLoginKey('');
        setIsSignIn(false);
        setUsername('')
    }
  return (
    <View style={styles.container}>

    <Image style={{width:200,height:200,marginVertical:10,alignSelf:'center'}}
         source={require('../../assets/welcome.png')}/>

      <Text>Welcome {username}</Text>
      <Button
      buttonColor='red'
      textColor='white'
      style={{borderRadius:0,margin:10}}
      onPress={() => logOut()}
      >
        Sign Out
      </Button>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})