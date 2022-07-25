import { View, Text,Image, TextInput,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../colors'
import Entypo from 'react-native-vector-icons/Entypo'
import {Formik,validateYupSchema} from 'formik'
import * as yup from 'yup'
import {db,authentication} from '../../firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'

export default function LoginForm({navigation}) {
  const LoginFormSchema=yup.object().shape({
    email:yup.string().max(200,''),
    password:yup.string().required().min(8,'The password atleast 10 characters')
})

const onLogin = async (email,password)=>{
  try{
    await signInWithEmailAndPassword(authentication,email,password)
    console.log('User find')
  }
  catch(error){
    console.log(error.message)
  }
}

  return (
    <View style={style.screen}>
      <Formik
      initialValues={{email:'',password:''}}
      onSubmit={(values)=>{
        console.log(values)
        onLogin(values.email,values.password)
      }}
      validationSchema={LoginFormSchema}
      validateOnMount={true}
      > 
    {({handleChange, handleBlur, handleSubmit, values})=>(
    <View style={style.form}>
    <Image source={require("../../assets/icon/text.png")} style={{height:70,width:200,marginBottom:70,marginTop:80}}/>
      <TextInput 
      placeholder='Number,Username or email'
      style={style.input}
      placeholderTextColor='grey'
      autoFocus={true}
      onChangeText={handleChange('email')}
      onBlur={handleBlur('email')}
      value={values.email}

      /> 

    <TextInput 
      placeholder='Password'
      style={style.input}
      placeholderTextColor='grey'
      autoFocus={true}
      onChangeText={handleChange('password')}
      onBlur={handleBlur('password')}
      value={values.password}
      />
      <Text style={{fontWeight:'bold',color:'#00a3ff'}}>Forgot your password ?</Text>
      
    <TouchableOpacity onPress={handleSubmit}>
      <View style={style.button}>
        <Text style={{fontWeight:'bold'}}>Log In</Text>
      </View>
    </TouchableOpacity>

    <View style={{flexDirection:'row',marginTop:15,}}>
        <Entypo name='facebook-with-circle' color={'black'} size={15} style={{paddingTop:2.4,paddingRight:4}}/>
        <Text  style={{color:'black',fontWeight:'bold'}}>
              Continue with facebook
        </Text>
    </View>
    
    <Text style={{color:'black',marginTop:15,}}>
        OR
    </Text>
    <Text style={{color:'black',fontWeight:'bold',marginTop:15,}} onPress={()=>{navigation.navigate('SignUpScreen')}}>
        Sign up
    </Text>

    <Text style={{marginTop:140,fontSize:13}}>
        From
        </Text>
        <Text style={{fontWeight:'bold'}}>
        GANEZ
        </Text>
    </View>
    )}
  </Formik>
    </View>    
  )
}

const style =StyleSheet.create({
    input:{
        backgroundColor:colors.input,
        borderRadius:10,
        marginBottom:17,
        width:340,
        height:55,
        color:'black'


    },
    form:{
        justifyContent:'center',
        alignItems:'center',        
    },
    button:{
        backgroundColor:"#00a3ff",
        width:340,
        justifyContent:'center',
        alignItems:'center',
        height:55,
        borderRadius:10,
        marginTop:15,
        
    }
})