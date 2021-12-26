import React, { Component } from 'react';
import { StyleSheet, Text, View ,Image ,ScrollView } from 'react-native';
import BankComp from '../components/BankComp';
import {Display} from '../utils';



export default function PartenairesScreen() {
    const DataBank =[
        {
            name :'CPG',
            etat :true ,
        },
        {
            name :'CPG',
            etat :false ,
        },
        {
            name :'CPG',
            etat :true ,
        }
    ]

  return (
    <View style={styles.container}>
        
        <ScrollView horizontal={true}>

        <BankComp/>
        <BankComp/> 
        <BankComp/>

        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection :'row',
    overflow:'hidden',
    borderRadius :15 ,
    margin:10,
    height :140
  },
 
});
