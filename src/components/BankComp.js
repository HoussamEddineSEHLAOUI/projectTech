import React, { Component } from 'react';
import { StyleSheet, Text, View ,Image } from 'react-native';
import {Display} from '../utils';

export default function BankComp(props) {
  return (
    <View style={styles.container}>
       <View style={styles.panelbank}>
             <Image  source={require('../assets/images/shield.png')} style={styles.logoBank} /> 
             <Text style={styles.titleBank}>CPGH</Text>
        </View>
        <View style={{
            backgroundColor : props.etat ? 'green' :'red',
            width :15,
            height :15,
            borderRadius :15/2,
            position :'absolute' ,
            top:0,
            left:0,
            margin:18
        }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection :'row',
    overflow:'hidden',
    borderRadius :15 ,
    margin:10,
    height :140 ,
    marginBottom :20
  },
  panelbank :{
      backgroundColor :'#fff',
      justifyContent:'center',
      alignItems:'center'
  },
  logoBank :{
      height:70,
      width :220,
      margin :10
  },
  titleBank :{
      height:20
  }
});
