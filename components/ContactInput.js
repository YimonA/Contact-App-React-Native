import {useState} from "react"
import { StyleSheet,Image,Button,TextInput, Text, View,Modal } from 'react-native'
import React from 'react'
const logoImg=require("../assets/logo.png");

const ContactInput = ({addContactHandler,isVisible,modalVisibleHandler,setIsVisible}) => {
    const [nameInput,setNameInput]=useState("");
    const [phoneInput,setPhoneInput]=useState("");

    const nameInputHandler=(val)=>{
        setNameInput(val);
        }
        
        const phoneInputHandler=(val)=>{
        setPhoneInput(val)
        }

        const onPressHandler=()=>{
            addContactHandler({id:Math.random().toString(),name:nameInput,phone:phoneInput});
            setNameInput("");
setPhoneInput("");
modalVisibleHandler();
        }

        const cancelHandler=()=>{
            modalVisibleHandler();
        }

  return (
    <Modal visible={isVisible} animationType="slide" presentationStyle="pageSheet" onRequestClose={()=>setIsVisible(false)}>
        <View style={styles.inputContainer}>
        <Image source={logoImg} style={styles.imageContainer} />
<TextInput placeholder="Name..." style={styles.input} value={nameInput} onChangeText={nameInputHandler}/>
<TextInput placeholder="Phone..."style={styles.input} value={phoneInput} onChangeText={phoneInputHandler}/>
<View style={styles.buttonContainer}>
<Button title="Add Contact" onPress={onPressHandler}/>
<Button title="Cancel" onPress={cancelHandler}/>
</View>
</View>    
</Modal>
  )
}

export default ContactInput

const styles = StyleSheet.create({
    
inputContainer:{
    marginTop:100,
    flex:1,
    padding:30,
    alignItems:"center"
  },
  input:{
    borderWidth:2,
    borderColor:"#2196f3",
    padding:8,
    marginBottom:30,
    width:"100%"

  },
  buttonContainer:{
    gap:14,
    width:"100%"
//flexDirection:"row-reverse",

  },
  imageContainer:{
    width:80,
    height:80,
    marginBottom:20
  }
})