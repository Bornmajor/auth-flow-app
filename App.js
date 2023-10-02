import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNav from './src/navigation/StackNav';
import { createContext,useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { useEffect } from 'react';


export const AuthFlow = createContext();
export default function App() {
   const [isSignin,setIsSignIn] = useState(false);
  

   const setLoginKey = async(val) =>{
    await SecureStore.setItemAsync('usr_id',val);
   }

  

   const checkUserLogin = async()=>{
    let key = await SecureStore.getItemAsync('usr_id');
    if(key !== ''){
     setIsSignIn(true);
    }else{
      setIsSignIn(false); 
    }
    console.log(key);
   }
   useEffect(()=>{
    checkUserLogin();
    console.log(isSignin);
   },[])


  return (
  <AuthFlow.Provider value={{isSignin,setIsSignIn,setLoginKey}}>
     <StackNav /> 
  </AuthFlow.Provider>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
