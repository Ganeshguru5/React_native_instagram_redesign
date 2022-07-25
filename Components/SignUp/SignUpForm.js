import { View, Text,Image, TextInput,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../colors'
import Entypo from 'react-native-vector-icons/Entypo'
import {Formik,validateYupSchema} from 'formik'
import * as yup from 'yup'
import {db,authentication} from '../../firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { collection, getDocs,doc,setDoc,getDoc } from 'firebase/firestore/lite';


export default function SignUpForm({navigation}) {

  
 

  const GetData=async ()=>{
    const userDoc = doc(db,'Users','ganeshguru10000@gmail.com');
    getDoc(userDoc)

    console.log((await getDoc(userDoc)).data())
  }

  const SignUpFormSchema=yup.object().shape({
    email:yup.string().max(200,''),
    password:yup.string().required().min(8,'The password atleast 10 characters')
})

const getRandomProfilePicture = async ()=>{
    const response = await fetch('https://randomuser.me/api')
    const data = await response.json()
    return data.results[0].picture.large
}

const onSignUp = async (email,password,username)=>{
  try{
    const authUser=await createUserWithEmailAndPassword(authentication,email,password)
    
    await setDoc(doc(db,"Users",authUser.user.email),{
      email:email,
      password:password,
      username:username,
      followers:0,
      following:0,
    })


    // db.collection('Users').doc(authUser.user.email).set({
    //   email: email,
    //   password: password,
    //   username:username,
    //   followers:0,
    //   following:0,
    // })
    // .then(() => {
    //   console.log('User added!');
    // });
    
  }
  catch(error){
    console.log(error.message)
  }
}

  return (
    <View style={style.screen}>
      <Formik
      initialValues={{email:'',password:'',username:''}}
      onSubmit={(values)=>{
        console.log(values)
        onSignUp(values.email,values.password,values.username)
      }}
      validationSchema={SignUpFormSchema}
      validateOnMount={true}
      > 
    {({handleChange, handleBlur, handleSubmit, values})=>(
    <View style={style.form}>
    <Image source={require("../../assets/icon/text.png")} style={{height:70,width:200,marginBottom:70,marginTop:80}}/>
      <TextInput 
      placeholder='Enter your email'
      style={style.input}
      placeholderTextColor='grey'
      autoFocus={true}
      onChangeText={handleChange('email')}
      onBlur={handleBlur('email')}
      value={values.email}

      /> 

<TextInput 
      placeholder='Create your username'
      style={style.input}
      placeholderTextColor='grey'
      autoFocus={true}
      onChangeText={handleChange('username')}
      onBlur={handleBlur('username')}
      value={values.username}

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
      
      
    <TouchableOpacity onPress={handleSubmit}>
      <View style={style.button}>
        <Text style={{fontWeight:'bold'}}>Sign Up</Text>
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
    <Text style={{color:'black',fontWeight:'bold',marginTop:15,}} onPress={()=>{navigation.navigate('LoginScreen')}}>
        Log in
    </Text>

    <Text style={{marginTop:140,fontSize:13}}>
        From
        </Text>
        <TouchableOpacity onPress={GetData}>
        <Text style={{fontWeight:'bold'}}>
        GANEZ
        </Text>
        </TouchableOpacity>
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