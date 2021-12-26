import React, { Component } from 'react';
import { StyleSheet, Text, View ,Image } from 'react-native';
import {Display} from '../utils';

export default function Application(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={{
          backgroundColor :props.etat ? 'green' : 'red' ,
          width :9,
          height:9,
          borderRadius :9/2 ,
          margin:10
      }}/>
      <Text style={styles.number}>{props.number}</Text>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:Display.setHeight(10),
    width :'94%',
    flexDirection:'row',
    alignItems:'center' , 
    margin :12 ,
    backgroundColor:'#fff',
    overflow:'hidden',
    borderRadius:15 ,
    padding :15
  },
  title:{
      color:'#000',
      width :'75%'
  },
  number :{
      width:'20%',
      textAlign:'center'
  }
});
