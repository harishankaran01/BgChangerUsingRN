import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function BgChanger() {
    const [bgColor,setBgColor]=useState("");
     async function changeColor(){
        let color1="#";
        let character="123456789ABCDEF";
        for (let i = 0; i < 6; i++) {
            color1 += character[Math.round(Math.random() * (character.length-1))];
        }
        setBgColor(color1);
    }
  return (
    <View style={[styles.bg,{backgroundColor:bgColor}]}>
      <TouchableOpacity onPress={()=>changeColor()} style={[styles.btns]} ><Text style={styles.btnsTxt}>Press Me</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    bg:{
        height:"100%",
        width:"100%",
        backgroundColor:"white",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    btns:{
        backgroundColor:"#e29e25",
        padding:10,
        borderRadius:10
    },
    btnsTxt:{
        color:"#ececec",
        fontSize:20
    }
})