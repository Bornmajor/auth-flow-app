import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React,{useEffect,useState} from 'react'
import { Image } from 'react-native'
import { TextInput,Button } from 'react-native-paper'
import { ToastAndroid } from 'react-native'
import { useContext } from 'react'
import { AuthFlow } from '../../App'

const LoginScreen = () => {
    const {setLoginKey,setIsSignIn} = useContext(AuthFlow);

    const [email,setEmail] = useState('');
    const [pwd,setPwd] = useState('');
    const [errorMail,setErrorMail] = useState(false);
    const [errorPwd,setErrorPwd] = useState(false);
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    
    const showFeedback = (msg) =>{
        ToastAndroid.showWithGravity(
            msg,
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
        );
    }

    const validateForm = () =>{
        if(email == ''){
            showFeedback('Email required');
            setErrorMail(true)
        }else if(pwd == ''){
            showFeedback('Password required');
            setErrorPwd(true);
        }else if(!emailRegex.test(email)){
            showFeedback('Email not valid');
            setErrorMail(true)
        }else if(email == ' ' || pwd == ' '){
            showFeedback('__ spaces not allowed');
            setErrorMail(true)
        }
        else{
           // console.log(email);
            setLoginKey(email);
            setIsSignIn(true);


        }

    }

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Image style={{width:200,height:200,marginVertical:10,alignSelf:'center'}}
         source={require('../../assets/login.png')}/>

        <TextInput
        style={styles.txtInput}
        placeholder='Email'
        value={email}
        onChangeText={(t) => setEmail(t)}
        error={errorMail}
        />
         <TextInput
        style={styles.txtInput}
        placeholder='Password'
        value={pwd}
        onChangeText={(t) => setPwd(t)}
        secureTextEntry={true}
        error={errorPwd}
        />
        <Button
        style={{marginVertical:10,borderRadius:0}}
        mode='contained'
        buttonColor='red'
        onPress={() => validateForm()}
        >
            Login
        </Button>




      
    </ScrollView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        margin:20
    },
    txtInput:{
        marginVertical:10
    }
})